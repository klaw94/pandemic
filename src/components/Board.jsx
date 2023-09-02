import { useState, useEffect, useRef } from "react";
import countries from "../data/countries";
import { nanoid } from "nanoid";
import lines from "../data/lines";
import ferries from "../data/ferries";
import infectionCards from "../data/infectionCards";
import Country from "./Country";
import EnumGamesStages from "../data/enumGamesStages";
import PlayerMat from "./PlayerMat";
import {
  handCards,
  epidemicCards,
  EnumCardTypes,
  EnumEvents,
} from "../data/handCards";
import InfectionRateCounter from "./InfectionRateCounter";
import OutbreaksTracker from "./OutbreaksTracker";
import CureTracker from "./CureTracker";

function shuffle(deck) {
  // for 1000 turns
  // switch the values of two random cards
  for (let i = 0; i < 1000; i++) {
    let location1 = Math.floor(Math.random() * deck.length);
    let location2 = Math.floor(Math.random() * deck.length);
    let tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  return deck;
}

export default function Board(props) {
  const [infectionCardsDeck, setInfectionCardsDeck] = useState(
    shuffle(infectionCards)
  );
  const [handCardsDeck, setHandCardsDeck] = useState([]);
  const [handCardsDiscard, setHandCardsDiscard] = useState([]);
  const [infectionCardsDiscard, setInfectionCardsDiscard] = useState([]);
  const [countriesData, setCountriesData] = useState(countries);
  const [gameStatus, setGameStatus] = useState(
    EnumGamesStages.PreparationRound
  );
  const [playersData, setPlayersData] = useState([]);
  const [infectionRateCounterData, setInfectionRateCounterData] = useState({
    index: 0,
    values: [2, 2, 2, 3, 3, 4, 4],
  });
  const [outbreakTrackerData, setOutbreakTrackerData] = useState({
    index: 0,
    values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  });
  const [cureTracker, setCureTracker] = useState([
    { cured: false, photo: "curered" },
    { cured: false, photo: "cureblue" },
    { cured: false, photo: "cureyellow" },
    { cured: false, photo: "cureblue" },
  ]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState();
  const [selectedItinerary, setSelectedItinerary] = useState([]);

  useEffect(() => {
    if (playersData && playersData.length > 0) {
      setCountriesData((prevValue) => {
        {
          let newCountryArray = [];
          for (let i = 0; i < prevValue.length; i++) {
            let playersPawns = [];

            for (let x = 0; x < playersData.length; x++) {
              if (prevValue[i].name === playersData[x].location) {
                playersPawns.push(playersData[x].icon);
              } else if (x === playersData.length - 1) {
                newCountryArray.push(prevValue[i]);
              }
            }
            newCountryArray.push({
              ...prevValue[i],
              players: [...playersPawns],
            });
          }
          return newCountryArray;
        }
      });
    }
  }, [playersData]); //run this code when the value of infection deck changes

  useEffect(() => {
    let initialDeck = shuffle(handCards);
    let nPlayer = props.playersData.length;
    let nCardsPerPlayer;
    switch (nPlayer) {
      case 2:
        nCardsPerPlayer = 4;
        break;
      case 3:
        nCardsPerPlayer = 3;
        break;
      case 4:
        nCardsPerPlayer = 2;
        break;
    }
    let playersHands = [];
    for (let i = 0; i < props.playersData.length; i++) {
      let hand = [];
      for (let x = 0; x < nCardsPerPlayer; x++) {
        hand.push(initialDeck.pop());
      }
      playersHands.push(hand);
    }

    //Prepare deck for play.
    //A portion of the deck is the whole deck divided among the epidemic cards that I have to include
    const portion = Math.ceil(initialDeck.length / props.epidemicCards);
    let finalDeck = [];
    for (let i = 0; i < props.epidemicCards; i++) {
      let part;
      if (i === 0) {
        //Actual division of the deck
        part = initialDeck.slice(0, portion);
      } else if (i == props.epidemicCards - 1) {
        part = initialDeck.slice(portion * i);
      } else {
        part = initialDeck.slice(portion * i, portion * (i + 1));
      }
      //I add an epidemic card to each of the parts of the deck
      part.push(epidemicCards[0]);
      //I shuffle the deck
      shuffle(part);
      finalDeck = [...finalDeck, ...part];
    }
    setHandCardsDeck(finalDeck);
    setPlayersData(
      props.playersData.map((p, index) => ({
        ...p,
        cards: playersHands[index],
      }))
    );
  }, []);

  useEffect(() => {
    if (gameStatus === EnumGamesStages.PreparationRound) {
      executeFirstRoundOfInfection();
      setTimeout(setGameStatus, 10000, EnumGamesStages.PlayersTurn);
    }
    if (gameStatus === EnumGamesStages.PlayersTurn) {
      setCurrentlyPlaying({ name: playersData[0].name, index: 0, actions: 4 });
    }
  }, [gameStatus]);

  useEffect(() => {
    setSelectedItinerary([]);
  }, [currentlyPlaying]);

  function executeFirstRoundOfInfection() {
    const drawnCards = [];
    const deck = infectionCardsDeck;

    //The first 3 cards get 3 cubes
    for (let i = 0; i < 3; i++) {
      const card = deck.pop();
      drawnCards.push(card);
      //For visual effect
      setTimeout(() => {
        addInfectionCube(card, 3);

        setInfectionCardsDiscard((prevValue) => [...prevValue, card]);
      }, (i + 1) * 1000);
    }
    //The second 3 cards get 2 cubes
    for (let i = 0; i < 3; i++) {
      const card = deck.pop();
      drawnCards.push(card);

      setTimeout(() => {
        addInfectionCube(card, 2);
        setInfectionCardsDiscard((prevValue) => [...prevValue, card]);
      }, (i + 4) * 1000);
    }
    //The third 3 cards get 1 cubes
    for (let i = 0; i < 3; i++) {
      const card = deck.pop();
      drawnCards.push(card);
      setTimeout(() => {
        addInfectionCube(card, 1);

        setInfectionCardsDiscard((prevValue) => [...prevValue, card]);
      }, (i + 7) * 1000);
    }

    setInfectionCardsDeck(deck);
  }

  function addInfectionCube(card, nCube) {
    let cubeArray = [];
    for (let i = 0; i < nCube; i++) {
      cubeArray.push({ color: card.color });
    }
    setCountriesData((prevValue) => {
      return prevValue.map((c) =>
        c.name === card.name
          ? {
              ...c,
              infectionCubes: [...c.infectionCubes, ...cubeArray],
            }
          : c
      );
    });
  }

  const visualCountries = countriesData.map((country) => {
    const stylesDiv = { left: country.left, top: country.top };
    const styleKnop = { backgroundColor: country.color };
    const stylesName = { left: country.left, top: country.top };
    return (
      <Country
        key={nanoid()}
        country={country}
        stylesDiv={stylesDiv}
        styleKnop={styleKnop}
        styleName={stylesName}
        handleClick={checkMovement}
        confirmMovement={confirmMovement}
        cancelMovement={cancelMovement}
      />
    );
  });

  const visualMapLines = lines.map((line) => {
    return (
      <svg key={nanoid()}>
        <line
          x1={line.begin[0]}
          y1={line.begin[1]}
          x2={line.lineTo[0]}
          y2={line.lineTo[1]}
          stroke={line.color}
        ></line>
      </svg>
    );
  });

  const visualLines = countriesData.map((country) => {
    return country.connections.map((conName) => {
      let connectedCountry = countriesData.find((c) => c.name === conName);
      let isHighlighted =
        country.highlighted && connectedCountry && connectedCountry.highlighted;
      let connectedFerry = ferries.find((f) => f.name === conName);
      return (
        <svg key={nanoid()}>
          <line
            x1={country.left + 10}
            y1={country.top + 10}
            x2={
              connectedFerry ? connectedFerry.left : connectedCountry.left + 10
            }
            y2={connectedFerry ? connectedFerry.top : connectedCountry.top + 10}
            stroke={isHighlighted ? "#b433aa" : "AntiqueWhite"}
          ></line>
        </svg>
      );
    });
  });

  const visualFerries = ferries.map((ferry) => {
    const stylesName = {
      position: "absolute",
      left: ferry.left > 0 ? ferry.left - 40 : ferry.left,
      top: ferry.top,
    };
    return (
      <div key={nanoid()} className="ferryDiv" style={stylesName}>
        {ferry.text}
      </div>
    );
  });

  const visualInfectionCardsDiscardPile = infectionCardsDiscard.map(
    //top math so that it looks like a card deck and not only one card
    (card, index) => {
      const styles = {
        backgroundImage: `url(/${card.photo})`,
        top: 30 + Math.round(index / 3) * 5,
        borderBottom: `20px solid ${card.color}`,
        borderRight: `20px solid ${card.color}`,
      };
      return (
        <div className="infectionCard" key={nanoid()} style={styles}>
          <h1>{card.name}</h1>
        </div>
      );
    }
  );

  const visualPlayerMat = playersData.map((player) => (
    <PlayerMat
      card={player}
      key={nanoid()}
      currentlyPlaying={currentlyPlaying}
      endTurn={passTurnToNextPlayer}
    />
  ));

  function passTurnToNextPlayer() {
    setCurrentlyPlaying((prevPlayer) => {
      if (prevPlayer.index === playersData.length - 1) {
        return { name: playersData[0].name, index: 0, actions: 4 };
      } else {
        return {
          name: playersData[prevPlayer.index + 1].name,
          index: prevPlayer.index + 1,
          actions: 4,
        };
      }
    });
  }

  function checkMovement(clickedCountry) {
    if (selectedItinerary.length > 0) {
      return;
    }
    const currentPlayer = playersData.find(
      (player) => player.name === currentlyPlaying.name
    );
    const departureCountry = countriesData.find((country) =>
      country.players.includes(currentPlayer.icon)
    );
    let possibleItineraries = getTravelItinerary(
      departureCountry,
      clickedCountry,
      currentlyPlaying.actions,
      [{ name: departureCountry.name, steps: 0 }]
    );
    possibleItineraries = flattenNestedArrays(possibleItineraries);
    console.log(possibleItineraries);
    if (possibleItineraries.length > 0) {
      let shortestItineary = getShortestArray(possibleItineraries);
      console.log(shortestItineary);
      setCountriesData((prevValue) =>
        prevValue.map((c) => {
          console.log(shortestItineary);
          let index = shortestItineary.findIndex(
            (itinearyItem) => itinearyItem.name === c.name
          );
          if (index === shortestItineary.length - 1) {
            return { ...c, highlighted: true, isDestination: true };
          } else if (index !== -1) {
            return { ...c, highlighted: true };
          } else {
            return c;
          }
        })
      );
      setSelectedItinerary(shortestItineary);
    }
  }

  function getTravelItinerary(origin, destination, maxSteps, itinerary) {
    console.log(itinerary);
    let possibleItineraries = [];
    if (origin.connections.includes(destination.name)) {
      itinerary.push({ name: destination.name, steps: itinerary.length });
      console.log(itinerary);
      return flattenNestedArrays(itinerary);
    } else {
      if (maxSteps > 0) {
        for (let connection of origin.connections) {
          let ferryList = ferries.map((ferry) => ferry.name);
          if (ferryList.includes(connection)) {
            let takenFerry = ferries.find((ferry) => ferry.name == connection);
            let destinationName = takenFerry.connections.find(
              (c) => c.name !== origin.name
            );
            let destinationCountry = countries.find(
              (country) => country.name === destinationName
            );
            destinationCountry.connections =
              destinationCountry.connections.filter(
                (c) => !ferryList.includes(c)
              );
            let result = getTravelItinerary(
              destinationCountry,
              destination,
              maxSteps - 1,
              [
                ...itinerary,
                { name: destinationCountry.name, steps: itinerary.length },
              ]
            );
            if (result && result.length > 0) {
              possibleItineraries.push(flattenNestedArrays(result));
            }
          } else if (!possibleItineraries.some((c) => c.name === connection)) {
            let result = getTravelItinerary(
              countries.find((country) => country.name === connection),
              destination,
              maxSteps - 1,
              [...itinerary, { name: connection, steps: itinerary.length }]
            );
            if (result && result.length > 0) {
              possibleItineraries.push(flattenNestedArrays(result));
            }
          }
        }
      }
      return flattenNestedArrays(possibleItineraries);
    }
  }

  function flattenNestedArrays(arr) {
    let flattened = [];
    arr.forEach((item) => {
      if (Array.isArray(item) && Array.isArray(item[0])) {
        flattened = flattened.concat(flattenNestedArrays(item));
      } else {
        flattened.push(item);
      }
    });
    return flattened;
  }

  function getShortestArray(arr) {
    if (!Array.isArray(arr[0])) {
      return arr;
    }
    let shortestArray = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length < shortestArray.length) {
        shortestArray = arr[i];
      }
    }
    return shortestArray;
  }

  function confirmMovement(country) {
    let actionsTaken = selectedItinerary.length - 1;
    let currentPlayerIcon = playersData.find(
      (p) => p.name === currentlyPlaying.name
    )?.icon;
    setCountriesData((prevValue) =>
      prevValue.map((c) => {
        if (c.name === selectedItinerary[0].name) {
          return {
            ...c,
            players: c.players.filter((p) => p !== currentPlayerIcon),
            highlighted: false,
            isDestination: false,
          };
        } else if (
          c.name === selectedItinerary[selectedItinerary.length - 1].name
        ) {
          return {
            ...c,
            players: [...c.players, currentPlayerIcon],
            highlighted: false,
            isDestination: false,
          };
        } else {
          return {
            ...c,
            highlighted: false,
            isDestination: false,
          };
        }
      })
    );
    setCurrentlyPlaying((prevValue) => ({
      ...prevValue,
      actions: prevValue.actions - actionsTaken,
    }));
    //player to the new place,
    //player removed from older place.
    //itinerary to 0
    //highlighted to 0
    //actions - number of steps
    //Where do i get the location of the previous player.?? Subsequent movement doesn;t work.
  }

  function cancelMovement() {
    //all countries are no highlighted and pop up is removed.
  }

  return (
    <div className="board">
      <div className="board--infectionCardsCorner">
        {infectionCardsDeck.length > 0 && (
          <div className="infectionCardBack"></div>
        )}
        <div className="board--infectionCardsCorner--openDiv">
          {visualInfectionCardsDiscardPile}
        </div>
      </div>
      <InfectionRateCounter data={infectionRateCounterData} />
      {visualCountries}
      {visualLines}
      {visualMapLines}
      {visualFerries}
      <OutbreaksTracker data={outbreakTrackerData} />
      <CureTracker data={cureTracker} />
      <div className="board--handCardsCorner">
        {handCardsDeck.length > 0 && <div className="handCardBack"></div>}
      </div>
      <div className="playersMats-div">{visualPlayerMat}</div>
    </div>
  );
}
