import { useState, useEffect } from "react";
import countries from "../data/countries";
import { nanoid } from "nanoid";
import lines from "../data/lines";
import ferries from "../data/ferries";
import infectionCards from "../data/infectionCards";
import Country from "./Country";

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

export default function Board() {
  const [infectionCardsDeck, setInfectionCardsDeck] = useState(infectionCards);
  const [infectionCardsDiscard, setInfectionCardsDiscard] = useState([]);

  useEffect(() => {
    setInfectionCardsDeck((prevValue) => shuffle(prevValue));
  }, []);
  console.log(infectionCardsDeck);

  const visualCountries = countries.map((country) => {
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
        <div className="infectionCard" style={styles}>
          <h1>{card.name}</h1>
        </div>
      );
    }
  );

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
    </div>
  );
}
