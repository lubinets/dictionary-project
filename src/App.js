import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultWord="Sunset" />
        </main>
        <footer className="App-footer">
          <div>
            <a
              href="https://github.com/lubinets/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://www.linkedin.com/in/karina-lubinets-70309b11a/"
              target="_blank"
              rel="noreferrer"
            >
              Karina Lubinets
            </a>
            , coded with{" "}
            <img
              src="https://www.shecodes.io/assets/logos/technologies/react-600b92c82a6b987573201ac95a30d8fcd6789a803c473337aadb2c2865cb7919.png"
              alt="React"
              className="rotating"
            ></img>{" "}
            <span className="react">React</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
