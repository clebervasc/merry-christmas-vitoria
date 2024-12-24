import { Routes, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";
import MapPage from "./pages/Map";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
