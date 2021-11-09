import "./styles.css";

const TriwizardTournament = ({ wizards, setTournament }) => {
  return (
    <>
      <h1 id="champions">Os Três Campeões</h1>
      <ul id="wizards">
        {wizards.map((wizard, index) => (
          <li key={index} className="wizard">
            <figure className="box">
              <img
                src={
                  wizard.image === "" ? "images/unknown-card.png" : wizard.image
                }
                id={wizard.house.toLowerCase()}
                className="image"
                alt={wizard.name}
              />
              <figcaption>
                <h1 className="name">{wizard.name}</h1>
                <h2 id={wizard.house} className="house">
                  {wizard.house === "" ? "Unknown" : wizard.house}
                </h2>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <button id="rect1" onClick={() => setTournament()}>
        Tentar novamente
      </button>
    </>
  );
};

export default TriwizardTournament;
