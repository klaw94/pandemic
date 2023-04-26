import { useState, useEffect, useRef } from "react";
import countries from "../data/countries";
import { nanoid } from "nanoid";
import lines from "../data/lines";
import ferries from "../data/ferries";
import infectionCards from "../data/infectionCards";
import Country from "./Country";
import EnumGamesStages from "../data/enumGamesStages";
import PlayerMat from "./PlayerMat";

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
  // const [prevArray, setPrevArray] = useState(infectionCardsDeck);
  const [infectionCardsDiscard, setInfectionCardsDiscard] = useState([]);
  const [countriesData, setCountriesData] = useState(countries);
  const [gameStatus, setGameStatus] = useState(
    EnumGamesStages.PreparationRound
  );
  const [playersData, setPlayersData] = useState([]);
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
    setPlayersData(props.playersData);
  }, []);

  useEffect(() => {
    if (gameStatus === EnumGamesStages.PreparationRound) {
      executeFirstRoundOfInfection();
    }
  }, [gameStatus]);

  //console.log(infectionCardsDiscard);

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

  const visualLines = countries.map((country) => {
    return country.connections.map((conName) => {
      let connectedCountry = countries.find((c) => c.name === conName);
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
            stroke={"AntiqueWhite"}
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

  console.log(playersData);

  const visualPlayerMat = playersData.map((player) => (
    <PlayerMat card={player} key={nanoid()} />
  ));

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
      {visualCountries}
      {visualLines}
      {visualMapLines}
      {visualFerries}
      <div className="playersMats-div">{visualPlayerMat}</div>
    </div>
  );
}
