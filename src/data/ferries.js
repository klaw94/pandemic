import EnumFerries from "./enumFerries";
import EnumCountries from "./enumCountries";

const ferries = [
  {
    name: EnumFerries.SFTokyo,
    left: 0,
    top: 470,
    connections: [EnumCountries.Tokyo, EnumCountries.SanFrancisco],
  },
  {
    name: EnumFerries.TokyoSF,
    left: 1166,
    top: 462,
    connections: [EnumCountries.Tokyo, EnumCountries.SanFrancisco],
  },
  {
    name: EnumFerries.ManilaSF,
    left: 1166,
    top: 608,
    connections: [EnumCountries.Manila, EnumCountries.SanFrancisco],
  },
  {
    name: EnumFerries.SFManila,
    left: 0,
    top: 500,
    connections: [EnumCountries.Manila, EnumCountries.SanFrancisco],
  },
  {
    name: EnumFerries.LASydney,
    left: 0,
    top: 600,
    connections: [EnumCountries.LosAngeles, EnumCountries.Sydney],
  },
  {
    name: EnumFerries.SydneyLA,
    left: 1166,
    top: 700,
    connections: [EnumCountries.LosAngeles, EnumCountries.Sydney],
  },
];

export default ferries;
