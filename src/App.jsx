import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Aboutus from './Components/Aboutus';
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';
import Alerts from './Components/Alerts';
import GenderDistribution from './Components/GenderDistribution';
import HotspotAnalytics from './Components/HotspotAnalysis';
import IncidentPlayback from './Components/IncidentPlayback';
import UserManagement from './Components/UserManagement';
import Settings from './Components/Setting';

function App() {
  return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
  );
}

const Content = () => {
  const alerts = [
    { name: "Lone woman detected", value: 24, color: "#cf4238" },
    { name: "SOS gesture detectedmen", value: 52, color: "#a82118" },
    { name: "Suspicious gesture detected", value: 32, color: "#a83283" },
  ]
  const location = useLocation();

  const showNavbar = location.pathname !== '/admin';

  return (
    
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/admin' element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard alerts={alerts}/>} />
        <Route path="/alerts" element={<Alerts alerts={alerts} />} />
        <Route path="/gender-distribution" element={<GenderDistribution />} />
        <Route path="/hotspot-analytics" element={<HotspotAnalytics />} />
        <Route path="/incident-playback" element={<IncidentPlayback />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
