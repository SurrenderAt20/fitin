import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./screens/public/Landing";
import { Concept } from "./screens/public/Concept";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Concept" element={<Concept />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
