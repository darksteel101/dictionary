import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <main className="container">
        <h1 className="mt-4">Dictionary</h1>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="footer">
        <small>Coded by Rebecca Leep</small>
      </footer>
    </div>
  );
}

export default App;
