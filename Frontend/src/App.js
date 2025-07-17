import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Landingpage } from './components/Landingpage';
import { Loginpage } from './components/Loginpage';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
