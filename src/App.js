import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Landing } from "./screens/public/Landing";
import { Concept } from "./screens/public/Concept";

function App() {
  return (
    <div className="App">
      <Router>
        <Landing />
        <Concept />
      </Router>
    </div>
  );
}

export default App;
