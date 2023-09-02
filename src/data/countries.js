import EnumCountries from "./enumCountries";
import EnumFerries from "./enumFerries";

const countries = [
  {
    name: EnumCountries.SanFrancisco,
    left: 138,
    top: 480,
    connections: [
      EnumCountries.Chicago,
      EnumCountries.LosAngeles,
      EnumFerries.SFManila,
      EnumFerries.SFTokyo,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Chicago,
    left: 223,
    top: 442,
    connections: [
      EnumCountries.SanFrancisco,
      EnumCountries.Atlanta,
      EnumCountries.Mexico,
      EnumCountries.Montreal,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Montreal,
    left: 315,
    top: 442,
    connections: [
      EnumCountries.NewYork,
      EnumCountries.Washington,
      EnumCountries.Chicago,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.NewYork,
    left: 364,
    top: 447,
    connections: [
      EnumCountries.London,
      EnumCountries.Madrid,
      EnumCountries.Montreal,
      EnumCountries.Washington,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Washington,
    left: 347,
    top: 489,
    connections: [
      EnumCountries.NewYork,
      EnumCountries.Montreal,
      EnumCountries.Atlanta,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Atlanta,
    left: 270,
    top: 490,
    connections: [
      EnumCountries.Washington,
      EnumCountries.Chicago,
      EnumCountries.Miami,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: true,
    players: [],
  },
  {
    name: EnumCountries.Madrid,
    left: 507,
    top: 480,
    connections: [
      EnumCountries.SaoPaulo,
      EnumCountries.NewYork,
      EnumCountries.London,
      EnumCountries.Paris,
      EnumCountries.Algiers,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.London,
    left: 507,
    top: 428,
    connections: [
      EnumCountries.Madrid,
      EnumCountries.NewYork,
      EnumCountries.Essen,
      EnumCountries.Paris,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Paris,
    left: 568,
    top: 450,
    connections: [
      EnumCountries.Madrid,
      EnumCountries.London,
      EnumCountries.Essen,
      EnumCountries.Milan,
      EnumCountries.Algiers,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Essen,
    left: 583,
    top: 408,
    connections: [
      EnumCountries.London,
      EnumCountries.Paris,
      EnumCountries.Milan,
      EnumCountries.StPetersburg,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Milan,
    left: 610,
    top: 436,
    connections: [
      EnumCountries.Essen,
      EnumCountries.Paris,
      EnumCountries.Istanbul,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.StPetersburg,
    left: 652,
    top: 384,
    connections: [
      EnumCountries.Moscow,
      EnumCountries.Essen,
      EnumCountries.Istanbul,
    ],
    color: "blue",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.LosAngeles,
    left: 144,
    top: 542,
    connections: [
      EnumCountries.SanFrancisco,
      EnumCountries.Chicago,
      EnumCountries.Mexico,
      EnumFerries.LASydney,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },

  {
    name: EnumCountries.Mexico,
    left: 222,
    top: 562,
    connections: [
      EnumCountries.LosAngeles,
      EnumCountries.Chicago,
      EnumCountries.Miami,
      EnumCountries.Bogota,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Miami,
    left: 294,
    top: 552,
    connections: [
      EnumCountries.Mexico,
      EnumCountries.Washington,
      EnumCountries.Atlanta,
      EnumCountries.Bogota,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Bogota,
    left: 297,
    top: 617,
    connections: [
      EnumCountries.Mexico,
      EnumCountries.Miami,
      EnumCountries.Lima,
      EnumCountries.SaoPaulo,
      EnumCountries.BuenosAires,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Lima,
    left: 284,
    top: 692,
    connections: [
      EnumCountries.Mexico,
      EnumCountries.Bogota,
      EnumCountries.Santiago,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Santiago,
    left: 296,
    top: 785,
    connections: [EnumCountries.Lima],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.BuenosAires,
    left: 358,
    top: 748,
    connections: [EnumCountries.Bogota, EnumCountries.SaoPaulo],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.SaoPaulo,
    left: 407,
    top: 697,
    connections: [
      EnumCountries.Bogota,
      EnumCountries.Madrid,
      EnumCountries.Lagos,
      EnumCountries.BuenosAires,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Lagos,
    left: 552,
    top: 596,
    connections: [
      EnumCountries.SaoPaulo,
      EnumCountries.Kinshasa,
      EnumCountries.Khartoum,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Kinshasa,
    left: 603,
    top: 643,
    connections: [
      EnumCountries.Johannesburg,
      EnumCountries.Lagos,
      EnumCountries.Khartoum,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Johannesburg,
    left: 647,
    top: 721,
    connections: [EnumCountries.Kinshasa, EnumCountries.Khartoum],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Khartoum,
    left: 647,
    top: 582,
    connections: [
      EnumCountries.Kinshasa,
      EnumCountries.Johannesburg,
      EnumCountries.Lagos,
      EnumCountries.Cairo,
    ],
    color: "yellow",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Algiers,
    left: 578,
    top: 516,
    connections: [
      EnumCountries.Madrid,
      EnumCountries.Paris,
      EnumCountries.Istanbul,
      EnumCountries.Cairo,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Istanbul,
    left: 637,
    top: 472,
    connections: [
      EnumCountries.Milan,
      EnumCountries.Algiers,
      EnumCountries.Baghdad,
      EnumCountries.Cairo,
      EnumCountries.Moscow,
      EnumCountries.StPetersburg,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Cairo,
    left: 637,
    top: 527,
    connections: [
      EnumCountries.Istanbul,
      EnumCountries.Algiers,
      EnumCountries.Khartoum,
      EnumCountries.Riyadh,
      EnumCountries.Baghdad,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Moscow,
    left: 701,
    top: 427,
    connections: [
      EnumCountries.StPetersburg,
      EnumCountries.Istanbul,
      EnumCountries.Tehran,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Baghdad,
    left: 701,
    top: 511,
    connections: [
      EnumCountries.Cairo,
      EnumCountries.Istanbul,
      EnumCountries.Riyadh,
      EnumCountries.Karachi,
      EnumCountries.Tehran,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Tehran,
    left: 760,
    top: 465,
    connections: [
      EnumCountries.Baghdad,
      EnumCountries.Moscow,
      EnumCountries.Delhi,
      EnumCountries.Karachi,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Riyadh,
    left: 716,
    top: 564,
    connections: [
      EnumCountries.Baghdad,
      EnumCountries.Cairo,
      EnumCountries.Karachi,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Karachi,
    left: 774,
    top: 528,
    connections: [
      EnumCountries.Riyadh,
      EnumCountries.Tehran,
      EnumCountries.Baghdad,
      EnumCountries.Delhi,
      EnumCountries.Mumbai,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Mumbai,
    left: 796,
    top: 570,
    connections: [
      EnumCountries.Karachi,
      EnumCountries.Delhi,
      EnumCountries.Chennai,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Delhi,
    left: 826,
    top: 500,
    connections: [
      EnumCountries.Karachi,
      EnumCountries.Mumbai,
      EnumCountries.Chennai,
      EnumCountries.Tehran,
      EnumCountries.Kolkata,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Chennai,
    left: 843,
    top: 597,
    connections: [
      EnumCountries.Delhi,
      EnumCountries.Mumbai,
      EnumCountries.Bangkok,
      EnumCountries.Jakarta,
      EnumCountries.Kolkata,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Kolkata,
    left: 872,
    top: 519,
    connections: [
      EnumCountries.Delhi,
      EnumCountries.Chennai,
      EnumCountries.Bangkok,
      EnumCountries.HongKong,
    ],
    color: "white",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Jakarta,
    left: 919,
    top: 660,
    connections: [
      EnumCountries.Chennai,
      EnumCountries.Bangkok,
      EnumCountries.HoChiminh,
      EnumCountries.Sydney,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Bangkok,
    left: 910,
    top: 580,
    connections: [
      EnumCountries.Chennai,
      EnumCountries.Kolkata,
      EnumCountries.HoChiminh,
      EnumCountries.HongKong,
      EnumCountries.Jakarta,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.HongKong,
    left: 943,
    top: 549,
    connections: [
      EnumCountries.Shangai,
      EnumCountries.Kolkata,
      EnumCountries.HoChiminh,
      EnumCountries.Manila,
      EnumCountries.Bangkok,
      EnumCountries.Taipei,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Shangai,
    left: 943,
    top: 493,
    connections: [
      EnumCountries.Beijing,
      EnumCountries.Seoul,
      EnumCountries.Tokyo,
      EnumCountries.Taipei,
      EnumCountries.HongKong,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Beijing,
    left: 928,
    top: 449,
    connections: [EnumCountries.Shangai, EnumCountries.Seoul],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Seoul,
    left: 978,
    top: 433,
    connections: [
      EnumCountries.Shangai,
      EnumCountries.Beijing,
      EnumCountries.Tokyo,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Tokyo,
    left: 1033,
    top: 441,
    connections: [
      EnumCountries.Shangai,
      EnumCountries.Seoul,
      EnumCountries.Osaka,
      EnumFerries.TokyoSF,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Osaka,
    left: 1044,
    top: 509,
    connections: [EnumCountries.Tokyo, EnumCountries.Taipei],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Taipei,
    left: 997,
    top: 536,
    connections: [
      EnumCountries.Osaka,
      EnumCountries.Shangai,
      EnumCountries.HongKong,
      EnumCountries.Manila,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Manila,
    left: 1030,
    top: 620,
    connections: [
      EnumFerries.ManilaSF,
      EnumCountries.Taipei,
      EnumCountries.HongKong,
      EnumCountries.HoChiminh,
      EnumCountries.Sydney,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.HoChiminh,
    left: 956,
    top: 620,
    connections: [
      EnumCountries.Manila,
      EnumCountries.Bangkok,
      EnumCountries.HongKong,
      EnumCountries.Jakarta,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
  {
    name: EnumCountries.Sydney,
    left: 1067,
    top: 750,
    connections: [
      EnumCountries.Manila,
      EnumFerries.SydneyLA,
      EnumCountries.Jakarta,
    ],
    color: "red",
    infectionCubes: [],
    researchCenter: false,
    players: [],
  },
];

export default countries;
