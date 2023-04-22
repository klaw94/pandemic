import EnumCountries from "./enumCountries";

const EnumCardTypes = {
  Country: "Country Card",
  Epidemic: "Epidemic Card",
  Event: "Event Card",
};

const EnumEvents = {
  Grant: "Government Grant",
  Forecast: "Forecast",
  Airlift: "Airlift",
  Resilient: "Resilient Population",
  QuietNight: "One Quiet Night",
};

const handCards = [
  {
    name: EnumCountries.SanFrancisco,
    type: EnumCardTypes.Country,
    color: "blue",
    photo: "northamericahand.png",
  },
  {
    name: EnumCountries.Chicago,
    type: EnumCardTypes.Country,

    color: "blue",
    photo: "northamericahand.png",
  },
  {
    name: EnumCountries.Montreal,
    type: EnumCardTypes.Country,

    color: "blue",
    photo: "northamericahand.png",
  },
  {
    name: EnumCountries.NewYork,
    color: "blue",
    type: EnumCardTypes.Country,

    photo: "northamericahand.png",
  },
  {
    name: EnumCountries.Washington,
    type: EnumCardTypes.Country,

    color: "blue",
    photo: "northamericahand.png",
  },
  {
    name: EnumCountries.Atlanta,
    type: EnumCardTypes.Country,

    color: "blue",
    photo: "northamericahand.png",
  },
  {
    name: EnumCountries.Madrid,
    type: EnumCardTypes.Country,

    color: "blue",
    photo: "europehand.png",
  },
  {
    name: EnumCountries.London,
    color: "blue",
    type: EnumCardTypes.Country,

    photo: "europehand.png",
  },
  {
    name: EnumCountries.Paris,
    type: EnumCardTypes.Country,

    color: "blue",
    photo: "europehand.png",
  },
  {
    name: EnumCountries.Essen,

    type: EnumCardTypes.Country,
    color: "blue",
    photo: "europehand.png",
  },
  {
    name: EnumCountries.Milan,
    type: EnumCardTypes.Country,

    color: "blue",
    photo: "europehand.png",
  },
  {
    name: EnumCountries.StPetersburg,
    type: EnumCardTypes.Country,

    photo: "europehand.png",
    color: "blue",
  },
  {
    name: EnumCountries.LosAngeles,
    type: EnumCardTypes.Country,

    photo: "northamericahand.png",
    color: "yellow",
  },

  {
    name: EnumCountries.Mexico,
    type: EnumCardTypes.Country,

    photo: "northamericahand.png",

    color: "yellow",
  },
  {
    name: EnumCountries.Miami,
    photo: "northamericahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.Bogota,
    photo: "southamericahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.Lima,
    photo: "southamericahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.Santiago,
    photo: "southamericahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.BuenosAires,
    photo: "southamericahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.SaoPaulo,
    photo: "southamericahand.png",

    type: EnumCardTypes.Country,
    color: "yellow",
  },
  {
    name: EnumCountries.Lagos,
    photo: "africahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.Kinshasa,
    photo: "africahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.Johannesburg,
    photo: "africahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.Khartoum,
    photo: "africahand.png",
    type: EnumCardTypes.Country,

    color: "yellow",
  },
  {
    name: EnumCountries.Algiers,
    photo: "africahand.png",

    type: EnumCardTypes.Country,
    color: "black",
  },
  {
    name: EnumCountries.Istanbul,
    photo: "europehand.png",

    type: EnumCardTypes.Country,
    color: "black",
  },
  {
    name: EnumCountries.Cairo,
    photo: "africahand.png",
    type: EnumCardTypes.Country,

    color: "black",
  },
  {
    name: EnumCountries.Moscow,
    photo: "europehand.png",
    type: EnumCardTypes.Country,

    color: "black",
  },
  {
    name: EnumCountries.Baghdad,
    photo: "middleeasthand.png",
    type: EnumCardTypes.Country,

    color: "black",
  },
  {
    name: EnumCountries.Tehran,
    photo: "middleeasthand.png",
    type: EnumCardTypes.Country,
    color: "black",
  },
  {
    name: EnumCountries.Riyadh,
    type: EnumCardTypes.Country,
    photo: "middleeasthand.png",
    color: "black",
  },
  {
    name: EnumCountries.Karachi,
    type: EnumCardTypes.Country,
    photo: "middleeasthand.png",
    color: "black",
  },
  {
    name: EnumCountries.Mumbai,
    type: EnumCardTypes.Country,
    photo: "middleeasthand.png",
    color: "black",
  },
  {
    name: EnumCountries.Delhi,
    type: EnumCardTypes.Country,
    photo: "middleeasthand.png",
    color: "black",
  },
  {
    name: EnumCountries.Chennai,
    type: EnumCardTypes.Country,
    photo: "middleeasthand.png",
    color: "black",
  },
  {
    name: EnumCountries.Kolkata,
    photo: "middleeasthand.png",
    type: EnumCardTypes.Country,
    color: "black",
  },
  {
    name: EnumCountries.Jakarta,
    photo: "southeastasiahand.png",
    type: EnumCardTypes.Country,
    color: "red",
  },
  {
    name: EnumCountries.Bangkok,
    photo: "southeastasiahand.png",
    type: EnumCardTypes.Country,

    color: "red",
  },
  {
    name: EnumCountries.HongKong,
    type: EnumCardTypes.Country,
    photo: "southeastasiahand.png",

    color: "red",
  },
  {
    name: EnumCountries.Shangai,
    type: EnumCardTypes.Country,
    photo: "northeastasiahand.png",

    color: "red",
  },
  {
    name: EnumCountries.Beijing,
    photo: "northeastasiahand.png",
    type: EnumCardTypes.Country,

    color: "red",
  },
  {
    name: EnumCountries.Seoul,
    photo: "northeastasiahand.png",
    type: EnumCardTypes.Country,

    color: "red",
  },
  {
    name: EnumCountries.Tokyo,
    photo: "northeastasiahand.png",

    type: EnumCardTypes.Country,
    color: "red",
  },
  {
    name: EnumCountries.Osaka,
    photo: "northeastasiahand.png",
    type: EnumCardTypes.Country,

    color: "red",
  },
  {
    name: EnumCountries.Taipei,
    photo: "northeastasiahand.png",
    type: EnumCardTypes.Country,

    color: "red",
  },
  {
    name: EnumCountries.Manila,
    photo: "southeastasiahand.png",
    type: EnumCardTypes.Country,

    color: "red",
  },
  {
    name: EnumCountries.HoChiminh,
    photo: "southeastasiahand.png",
    type: EnumCardTypes.Country,

    color: "red",
  },
  {
    name: EnumCountries.Sydney,
    photo: "southeastasiahand.png",
    type: EnumCardTypes.Country,

    color: "red",
  },
  {
    name: EnumEvents.Grant,
    photo: "moneyhospital.png",
    type: EnumCardTypes.Event,
    text: "Add 1 research station to any city",
    color: "yellow",
  },
  {
    name: EnumEvents.Airlift,
    photo: "helicopter.png",
    type: EnumCardTypes.Event,
    text: "Move any 1 pown to any city. Permission needed",
    color: "yellow",
  },
  {
    name: EnumEvents.Forecast,
    photo: "forecast.png",
    type: EnumCardTypes.Event,
    text: "Draw, look and rearrange the top six cards of the Infection Deck",
    color: "yellow",
  },
  {
    name: EnumEvents.Resilient,
    photo: "resilient.png",
    type: EnumCardTypes.Event,
    text: "Remove any 1 card in the Infection Discard Pile",
    color: "yellow",
  },
  {
    name: EnumEvents.QuietNight,
    photo: "quiet.png",
    type: EnumCardTypes.Event,
    text: "Skip the next Infect Cities Step",
    color: "yellow",
  },
];

const epidemicCards = [
  {
    name: "Epidemic",
    photo: "epidemic.png",
    type: EnumCardTypes.Epidemic,
    color: "green",
  },
  {
    name: "Epidemic",
    photo: "epidemic.png",
    type: EnumCardTypes.Epidemic,
    color: "green",
  },
  {
    name: "Epidemic",
    photo: "epidemic.png",
    type: EnumCardTypes.Epidemic,
    color: "green",
  },
  {
    name: "Epidemic",
    photo: "epidemic.png",
    type: EnumCardTypes.Epidemic,
    color: "green",
  },
  {
    name: "Epidemic",
    photo: "epidemic.png",
    type: EnumCardTypes.Epidemic,
    color: "green",
  },
  {
    name: "Epidemic",
    photo: "epidemic.png",
    type: EnumCardTypes.Epidemic,
    color: "green",
  },
];

export { handCards, epidemicCards, EnumCardTypes, EnumCardTypes };
