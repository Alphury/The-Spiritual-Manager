import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImmersionPage from "./pages/ImmersionPage";
import AssessmentPage from "./pages/AssessmentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/immersion" element={<ImmersionPage />} />
      <Route path="/assessment" element={<AssessmentPage />} />
    </Routes>
  );
}

export default App;