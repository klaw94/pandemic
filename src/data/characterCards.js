const EnumCharacters = {
  Doctor: "Medic",
  Dispatcher: "Dispatcher",
  Quarantiner: "Quarantine Specialist",
  Operator: "Operations Expert",
  Researcher: "Reasearcher",
  Scientist: "Scientist",
  Planner: "Contingency Planner",
};

const characterCards = [
  {
    name: EnumCharacters.Medic,
    color: "orange",
    //photo: "northamericahand.png",
    //icon: "orange Pawn",
    description:
      "Remove all cubes of one color when doing Treat Disease. \n Automatically remove cubes of cured diseases from the city you are in (and preven them from being placed there)",
  },
  {
    name: EnumCharacters.Dispatcher,
    color: "pink",
    //photo: "northamericahand.png",
    //icon: "orange Pawn",
    description:
      "Move another player's pawn as if it were yours. \n As an action, move any pawn to a city with another pawn. \n You need permission",
  },
  {
    name: EnumCharacters.Researcher,
    color: "brown",
    //photo: "northamericahand.png",
    //icon: "orange Pawn",
    description:
      "You may give any 1 of your City Cards when you Share Knowledge. It need not match your city. A player who Shares Knowledge with you on their turn can take any 1 of your City Cards.",
  },
  {
    name: EnumCharacters.Operator,
    color: "green",
    //photo: "northamericahand.png",
    //icon: "orange Pawn",
    description:
      "As an action, build a research station in the city you are in (no City card needed). \n Once per turn as an action, move from a research station to any city by discarding any City card",
  },
  {
    name: EnumCharacters.Quarantiner,
    color: "green",
    //photo: "northamericahand.png",
    //icon: "orange Pawn",
    description:
      "Prevent disease cube placements (and outbreaks) in the city you are in and all cities connected to it.",
  },
  {
    name: EnumCharacters.Scientist,
    color: "white",
    //photo: "northamericahand.png",
    //icon: "orange Pawn",
    description:
      "You need only 4 cards of the same color to do the Discover a Cure action",
  },
  {
    name: EnumCharacters.Planner,
    color: "blue",
    //photo: "northamericahand.png",
    //icon: "orange Pawn",
    description:
      "As an action, take any discarded Event card and store it on this card. \n When you play the stored Event card, remove it from the game. \n Limit: 1 Event card on this card at a time, which is not part of your hand.",
  },
];