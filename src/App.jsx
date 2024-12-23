import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MapPage from "./pages/Map";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
