 
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
 
import ExcavationServices from './components/Services/ExcavationServices/ExcavationServices';
import DemolitionDismantle from './components/Services/DemolitionDismantle/DemolitionDismantle';
import SitePreparations from './components/Services/SitePreparations/SitePreparations';
import Career from './components/Career/Career';
import Clientele from './components/Clientele/Clientele';
import AboutOurTeam from './components/About/AboutOurTeam/AboutOurTeam';
import CoreValues from './components/About/CoreValues/CoreValues';
import ProjectBody from "./components/Project/ProjectBody"
import Services from './components/CEService/Services';
import FloatingSocialMedia from './components/FloatingSocialMedia';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './components/Gallery/Gallery';
import FooterNew from './components/Footer/FooterNew';

// Admin components
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import ClientManager from './components/Admin/ClientManager';
import GalleryManager from './components/Admin/GalleryManager';
import ProtectedRoute from './components/Admin/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { useEffect } from 'react';
import { initializeDefaultData } from './services/localStorage';
function App() {
  // Initialize default data for localStorage
  useEffect(() => {
    initializeDefaultData();
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <div className="App overflow-clip">
          <Router>
            <ScrollToTop/>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={
              <>
                <Nav/>
                <Home />
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/aboutUs" element={
              <>
                <Nav/>
                <About/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/team" element={
              <>
                <Nav/>
                <AboutOurTeam/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/core" element={
              <>
                <Nav/>
                <CoreValues/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/career" element={
              <>
                <Nav/>
                <Career/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/services" element={
              <>
                <Nav/>
                <Services/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/project" element={
              <>
                <Nav/>
                <ProjectBody/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/client" element={
              <>
                <Nav/>
                <Clientele/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/gallery" element={
              <>
                <Nav/>
                <Gallery/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/excavation" element={
              <>
                <Nav/>
                <ExcavationServices/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/demolition" element={
              <>
                <Nav/>
                <DemolitionDismantle/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/siteprep" element={
              <>
                <Nav/>
                <SitePreparations/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />
            <Route path="/contact" element={
              <>
                <Nav/>
                <Contact/>
                <FooterNew/>
                <FloatingSocialMedia/>
              </>
            } />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/clients" element={<ClientManager />} />
              <Route path="/admin/gallery" element={<GalleryManager />} />
            </Route>
          </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
