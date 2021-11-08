import "./styles.css";

const TriwizardTournament = ({ wizards, setTournament }) => {
  return (
    <>
      <ul id="wizards">
        {wizards.map((wizard, index) => (
          <li key={index}>
            <figure>
              <img
                src={
                  wizard.image === "" ? "images/unknown-card.png" : wizard.image
                }
                id={`image${index}`}
                alt={wizard.name}
              />
              <figcaption>
                <h1 id={`name${index}`}>{wizard.name}</h1>
                <h2 id={`house${index}`}>
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
