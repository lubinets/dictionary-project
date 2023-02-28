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
          <Dictionary defaultWord="Programming" />
        </main>
        <footer className="App-footer">
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
          , hosted on{" "}
          <a
            href="https://melodious-paprenjak-bfc577.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
