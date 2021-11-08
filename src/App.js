import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import TriwizardTournament from "./components/TriwizardTournament";

function App() {
  const [students, setStudents] = useState([]);
  const [wizards, setWizards] = useState([]);
  const [tournament, setTournament] = useState(false);

  useEffect(() => {
    return fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

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
