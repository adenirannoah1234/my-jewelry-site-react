import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';
import Sign from './pages/sign-in/Sign-in';
import Dashboards from './pages/dashboards/Dashboards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Sign />} />
          <Route path="/dashboard" element={<Dashboards />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
