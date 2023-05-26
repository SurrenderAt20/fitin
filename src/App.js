import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Landing } from "./screens/public/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <Landing />
      </Router>
    </div>
  );
}

export default App;
