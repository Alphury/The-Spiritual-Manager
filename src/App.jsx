import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ImmersionPage from "./pages/ImmersionPage";
import AssessmentPage from "./pages/AssessmentPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/immersion" element={<ImmersionPage />} />
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;