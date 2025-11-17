import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FloatingDonateButton from "./components/FloatingDonateButton/FloatingDonateButton";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import OurApproach from "./pages/OurApproach";
import AIIntegration from "./pages/AIIntegration";
import FounderVision from "./pages/FounderVision";
import History from "./pages/History";
import Events from "./pages/Events";

// Component to scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

// Component to handle GitHub Pages redirect
function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if we have a stored redirect path from GitHub Pages 404.html
    const redirectPath = sessionStorage.getItem("ghpRedirectPath");
    if (redirectPath && location.pathname === "/index.html") {
      // Clear the stored path
      sessionStorage.removeItem("ghpRedirectPath");
      // Navigate to the stored path
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RedirectHandler />
      <div className="bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.html" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/ai-integration" element={<AIIntegration />} />
          <Route path="/founder-vision" element={<FounderVision />} />
          <Route path="/history" element={<History />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer />
        <FloatingDonateButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
