import EnumCountries from "./enumCountries";

const EnumCharacters = {
  Medic: "Medic",
  Dispatcher: "Dispatcher",
  Quarantiner: "Quarantine Specialist",
  Operator: "Operations Expert",
  Researcher: "Reasearcher",
  Scientist: "Scientist",
  Planner: "Contingency Planner",
};

const characterCardsData = [
  {
    name: EnumCharacters.Medic,
    color: "orange",
    backgroundColor: "#e8a877",
    photo: "medic.png",
    icon: "orangepawn.png",
    description:
      "Remove all cubes of one color when doing Treat Disease. \n Automatically remove cubes of cured diseases from the city you are in (and preven them from being placed there)",
    location: EnumCountries.Atlanta,
  },
  {
    name: EnumCharacters.Dispatcher,
    color: "pink",
    backgroundColor: "#e877ca",
    photo: "dispatcher.png",
    icon: "pinkpawn.png",
    description:
      "Move another player's pawn as if it were yours. \n As an action, move any pawn to a city with another pawn. \n You need permission",
    location: EnumCountries.Atlanta,
  },
  {
    name: EnumCharacters.Researcher,
    color: "brown",
    backgroundColor: "#926d55",
    photo: "researcher.png",
    icon: "brownpawn.png",
    description:
      "You may give any 1 of your City Cards when you Share Knowledge. It need not match your city. A player who Shares Knowledge with you on their turn can take any 1 of your City Cards.",
    location: EnumCountries.Atlanta,
  },
  {
    name: EnumCharacters.Operator,
    color: "greenyellow",
    backgroundColor: "#a9ec79",
    photo: "operations.png",
    icon: "lightgreenpawn.png",
    description:
      "As an action, build a research station in the city you are in (no City card needed). \n Once per turn as an action, move from a research station to any city by discarding any City card",
    location: EnumCountries.Atlanta,
  },
  {
    name: EnumCharacters.Quarantiner,
    color: "green",
    backgroundColor: "#55783b",
    photo: "quarantine.png",
    icon: "darkgreenpawn.png",
    description:
      "Prevent disease cube placements (and outbreaks) in the city you are in and all cities connected to it.",
    location: EnumCountries.Atlanta,
  },
  {
    name: EnumCharacters.Scientist,
    color: "white",
    backgroundColor: "#d5dbd0",
    photo: "scientist.png",
    icon: "whitepawn.png",
    description:
      "You need only 4 cards of the same color to do the Discover a Cure action",
    location: EnumCountries.Atlanta,
  },
  {
    name: EnumCharacters.Planner,
    color: "blue",
    backgroundColor: "#99e8f3",
    photo: "planner.png",
    icon: "bluepawn.png",
    description:
      "As an action, take any discarded Event card and store it on this card. \n When you play the stored Event card, remove it from the game. \n Limit: 1 Event card on this card at a time, which is not part of your hand.",
    location: EnumCountries.Atlanta,
  },
];

export default characterCardsData;
