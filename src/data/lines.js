import countries from "./countries";
import EnumCountries from "./enumCountries";

const lines = [
  {
    name: "New York - map",
    color: "blue",
    begin: [
      countries.find((c) => c.name === EnumCountries.NewYork).left + 10,
      countries.find((c) => c.name === EnumCountries.NewYork).top + 10,
    ],
    lineTo: [317, 480],
  },

  {
    name: "Madrid - map",
    color: "blue",
    begin: [
      countries.find((c) => c.name === EnumCountries.Madrid).left + 10,
      countries.find((c) => c.name === EnumCountries.Madrid).top + 10,
    ],
    lineTo: [550, 490],
  },

  {
    name: "London - map",
    color: "blue",
    begin: [
      countries.find((c) => c.name === EnumCountries.London).left + 10,
      countries.find((c) => c.name === EnumCountries.London).top + 10,
    ],
    lineTo: [565, 440],
  },

  {
    name: "Essen - map",
    color: "blue",
    begin: [
      countries.find((c) => c.name === EnumCountries.Essen).left + 10,
      countries.find((c) => c.name === EnumCountries.Essen).top + 10,
    ],
    lineTo: [575, 445],
  },

  {
    name: "Milan - map",
    color: "blue",
    begin: [
      countries.find((c) => c.name === EnumCountries.Milan).left + 10,
      countries.find((c) => c.name === EnumCountries.Milan).top + 10,
    ],
    lineTo: [600, 470],
  },

  {
    name: "Washington - map",
    color: "blue",
    begin: [
      countries.find((c) => c.name === EnumCountries.Washington).left + 10,
      countries.find((c) => c.name === EnumCountries.Washington).top + 10,
    ],
    lineTo: [310, 493],
  },

  {
    name: "Miami - map",
    color: "yellow",
    begin: [
      countries.find((c) => c.name === EnumCountries.Miami).left + 10,
      countries.find((c) => c.name === EnumCountries.Miami).top + 10,
    ],
    lineTo: [287, 540],
  },

  {
    name: "Lima - map",
    color: "yellow",
    begin: [
      countries.find((c) => c.name === EnumCountries.Lima).left + 10,
      countries.find((c) => c.name === EnumCountries.Lima).top + 10,
    ],
    lineTo: [305, 680],
  },

  {
    name: "Santiago - map",
    color: "yellow",
    begin: [
      countries.find((c) => c.name === EnumCountries.Santiago).left + 10,
      countries.find((c) => c.name === EnumCountries.Santiago).top + 10,
    ],
    lineTo: [320, 770],
  },

  {
    name: "Kinshasa - map",
    color: "yellow",
    begin: [
      countries.find((c) => c.name === EnumCountries.Kinshasa).left + 10,
      countries.find((c) => c.name === EnumCountries.Kinshasa).top + 10,
    ],
    lineTo: [610, 630],
  },

  {
    name: "Khartoum - map",
    color: "yellow",
    begin: [
      countries.find((c) => c.name === EnumCountries.Khartoum).left + 10,
      countries.find((c) => c.name === EnumCountries.Khartoum).top + 10,
    ],
    lineTo: [660, 570],
  },

  {
    name: "Algiers - map",
    color: "black",
    begin: [
      countries.find((c) => c.name === EnumCountries.Algiers).left + 10,
      countries.find((c) => c.name === EnumCountries.Algiers).top + 10,
    ],
    lineTo: [590, 505],
  },

  {
    name: "Moscow - map",
    color: "black",
    begin: [
      countries.find((c) => c.name === EnumCountries.Moscow).left + 10,
      countries.find((c) => c.name === EnumCountries.Moscow).top + 10,
    ],
    lineTo: [670, 430],
  },

  {
    name: "Riyadh - map",
    color: "black",
    begin: [
      countries.find((c) => c.name === EnumCountries.Riyadh).left + 10,
      countries.find((c) => c.name === EnumCountries.Riyadh).top + 10,
    ],
    lineTo: [725, 550],
  },

  {
    name: "Karachi - map",
    color: "black",
    begin: [
      countries.find((c) => c.name === EnumCountries.Karachi).left + 10,
      countries.find((c) => c.name === EnumCountries.Karachi).top + 10,
    ],
    lineTo: [805, 545],
  },

  {
    name: "Mumbai - map",
    color: "black",
    begin: [
      countries.find((c) => c.name === EnumCountries.Mumbai).left + 10,
      countries.find((c) => c.name === EnumCountries.Mumbai).top + 10,
    ],
    lineTo: [823, 560],
  },

  {
    name: "Delhi - map",
    color: "black",
    begin: [
      countries.find((c) => c.name === EnumCountries.Delhi).left + 10,
      countries.find((c) => c.name === EnumCountries.Delhi).top + 10,
    ],
    lineTo: [830, 535],
  },

  {
    name: "Chennai - map",
    color: "black",
    begin: [
      countries.find((c) => c.name === EnumCountries.Chennai).left + 10,
      countries.find((c) => c.name === EnumCountries.Chennai).top + 10,
    ],
    lineTo: [845, 600],
  },

  {
    name: "Kolkata - map",
    color: "black",
    begin: [
      countries.find((c) => c.name === EnumCountries.Kolkata).left + 10,
      countries.find((c) => c.name === EnumCountries.Kolkata).top + 10,
    ],
    lineTo: [879, 555],
  },

  {
    name: "Jakarta - map",
    color: "red",
    begin: [
      countries.find((c) => c.name === EnumCountries.Jakarta).left + 10,
      countries.find((c) => c.name === EnumCountries.Jakarta).top + 10,
    ],
    lineTo: [945, 655],
  },
  {
    name: "Manila - map",
    color: "red",
    begin: [
      countries.find((c) => c.name === EnumCountries.Manila).left + 10,
      countries.find((c) => c.name === EnumCountries.Manila).top + 10,
    ],
    lineTo: [995, 575],
  },
  {
    name: "Osaka - map",
    color: "red",
    begin: [
      countries.find((c) => c.name === EnumCountries.Osaka).left + 10,
      countries.find((c) => c.name === EnumCountries.Osaka).top + 10,
    ],
    lineTo: [1030, 500],
  },
  {
    name: "Tokyo - map",
    color: "red",
    begin: [
      countries.find((c) => c.name === EnumCountries.Tokyo).left + 10,
      countries.find((c) => c.name === EnumCountries.Tokyo).top + 10,
    ],
    lineTo: [1045, 495],
  },
  {
    name: "Seoul - map",
    color: "red",
    begin: [
      countries.find((c) => c.name === EnumCountries.Seoul).left + 10,
      countries.find((c) => c.name === EnumCountries.Seoul).top + 10,
    ],
    lineTo: [1000, 485],
  },
  {
    name: "Beijing - map",
    color: "red",
    begin: [
      countries.find((c) => c.name === EnumCountries.Beijing).left + 10,
      countries.find((c) => c.name === EnumCountries.Beijing).top + 10,
    ],
    lineTo: [965, 485],
  },
  {
    name: "Shangai - map",
    color: "red",
    begin: [
      countries.find((c) => c.name === EnumCountries.Shangai).left + 10,
      countries.find((c) => c.name === EnumCountries.Shangai).top + 10,
    ],
    lineTo: [980, 505],
  },
];

export default lines;
