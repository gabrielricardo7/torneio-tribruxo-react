import "./styles.css";

const HomePage = ({ getWizards }) => {
  return (
    <div id="homePage">
      <h1 id="title">Torneio tribruxo</h1>
      <h2 id="info">Clique no botão para encontrar os feiticeiros!</h2>
      <button id="rect0" onClick={() => getWizards()}>
        Começar!
      </button>
    </div>
  );
};

export default HomePage;
