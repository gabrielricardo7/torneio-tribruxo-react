import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import TriwizardTournament from "./components/TriwizardTournament";

function App() {
  const [students, setStudents] = useState([]);
  const [wizards, setWizards] = useState([]);
  const [tournament, setTournament] = useState(false);

  useEffect(() => {
    return fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  // fetch("http://hp-api.herokuapp.com/api/characters/students")
  //   .then((response) => response.json())
  //   .then((response) => {
  //     setStudents(response.results);
  //   });

  console.log(students);

  function getWizards() {
    const three = [];
    let min = 0;
    let max = students.length;
    for (let i = 0; i < 3; i++) {
      three.push(students[Math.floor(Math.random() * (max - min)) + min]);
    }
    setTournament(true);
    return setWizards(three);
  }

  // getTriRandom(0, students.length);
  console.log(wizards);
  console.log(students.length);

  return (
    <div className="App">
      {tournament ? (
        <TriwizardTournament wizards={wizards} setTournament={setTournament} />
      ) : (
        <HomePage getWizards={getWizards} />
      )}
    </div>
  );
}

export default App;
