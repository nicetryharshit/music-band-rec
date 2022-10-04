import { useMemo, useState } from "react";
import "./styles.css";

var musicBandDatabase = [
  {
    name: "Tool",
    genre: "Rock",
    formedIn: 1990
  },
  {
    name: "Opeth",
    genre: "Rock",
    formedIn: 1990
  },
  {
    name: "King Gizzard and the Lizard Wizard",
    genre: "Rock",
    formedIn: 2010
  },
  {
    name: "Nirvana",
    genre: "Grunge",
    formedIn: 1987
  },
  {
    name: "Soundgarden",
    genre: "Grunge",
    formedIn: 1984
  },
  {
    name: "Pearl Jam",
    genre: "Grunge",
    formedIn: 1990
  },
  {
    name: "Metallica",
    genre: "Metal",
    formedIn: 1981
  },
  {
    name: "Slayer",
    genre: "Metal",
    formedIn: 1981
  },
  {
    name: "Pantera",
    genre: "Metal",
    formedIn: 1981
  },
  {
    name: "Gojira",
    genre: "Metal",
    formedIn: 1996
  }
];

var allGenres = [];
for (var i = 0; i < musicBandDatabase.length; i++) {
  if (!allGenres.includes(musicBandDatabase[i].genre))
    allGenres.push(musicBandDatabase[i].genre);
}

export default function App() {
  const [filteredBands, setFilteredBands] = useState([]);

  function onBandButtonClick(g) {
    var _filteredBands = [];
    for (var i = 0; i < musicBandDatabase.length; i++) {
      if (musicBandDatabase[i].genre === g)
        _filteredBands.push(musicBandDatabase[i]);
    }

    setFilteredBands(_filteredBands);
  }

  return (
    <div className="App">
      <div className="section">
        <h1> Music rec</h1>
        <p> Select a genre to get recommendations</p>
      </div>
      <div className="section">
        {allGenres.map(function (g) {
          return (
            <button
              onClick={() => onBandButtonClick(g)}
              className="band-btn"
              key={g}
            >
              {g}
            </button>
          );
        })}
      </div>

      <div className="section">
        <hr></hr>
      </div>

      <div className="section">
        {filteredBands.map(function (fb) {
          return (
            <li className="band-list_element" key={fb.name}>
              {<h3>{fb.name}</h3>}
              {<h2>Formed in {fb.formedIn}</h2>}
            </li>
          );
        })}
      </div>
    </div>
  );
}
