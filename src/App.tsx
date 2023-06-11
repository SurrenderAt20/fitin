import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "./pages/public/Landing";
import { Concept } from "./pages/public/Concept";
import { Testimonials } from "./pages/public/Testimonials";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Concept" element={<Concept />} />
          <Route path="/Testimonials" element={<Testimonials />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
