import "./App.css";
import Pet from "./components/Pet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="text-white">
      <Router>
        <Routes>
          <Route path="/" element={<Pet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
