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
    const min = 0;
    const max = students.length;
    const houses = [];
    while (three.length < 3) {
      let wizard = students[Math.floor(Math.random() * (max - min)) + min];
      if (!houses.includes(wizard.house)) {
        houses.push(wizard.house);
        three.push(wizard);
      }
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
