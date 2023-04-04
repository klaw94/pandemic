const countries = [
  {
    name: "San Francisco",
    left: 138,
    top: 480,
    connections: ["Chicago", "Los Angeles", "Manila", "Tokyo"],
    color: "blue",
  },
  {
    name: "Chicago",
    left: 223,
    top: 442,
    connections: ["San Francisco", "Atlanta", "Mexico City", "Montreal"],
    color: "blue",
  },
  {
    name: "Montreal",
    left: 315,
    top: 442,
    connections: ["New York", "Washington", "Chicago"],
    color: "blue",
  },
  {
    name: "New York",
    left: 364,
    top: 447,
    connections: ["London", "Madrid", "Montreal", "Washington"],
    color: "blue",
  },
  {
    name: "Washington",
    left: 347,
    top: 489,
    connections: ["New York", "Montreal", "Atlanta"],
    color: "blue",
  },
  {
    name: "Atlanta",
    left: 270,
    top: 490,
    connections: ["Washington", "Chicago", "Miami"],
    color: "blue",
  },
  {
    name: "Los Angeles",
    left: 144,
    top: 542,
    connections: ["San Francisco", "Chicago", "Mexico", "Sydney"],
    color: "yellow",
  },
  {
    name: "Los Angeles",
    left: 144,
    top: 542,
    connections: ["San Francisco", "Chicago", "Mexico", "Sydney"],
    color: "yellow",
  },
  {
    name: "Mexico City",
    left: 144,
    top: 562,
    connections: ["Los Angeles", "Chicago", "Miami", "Bogotá"],
    color: "yellow",
  },
  {
    name: "Miami",
    left: 294,
    top: 552,
    connections: ["Mexico City", "Washington", "Atlanta", "Bogotá"],
    color: "yellow",
  },
];

export default countries;
