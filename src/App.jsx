import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import OurApproach from "./pages/OurApproach";
import AIIntegration from "./pages/AIIntegration";
import FounderVision from "./pages/FounderVision";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/ai-integration" element={<AIIntegration />} />
          <Route path="/founder-vision" element={<FounderVision />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
