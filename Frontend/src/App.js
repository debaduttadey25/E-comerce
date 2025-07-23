import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Landingpage } from './components/Landingpage';
import { Loginpage } from './components/Loginpage';
import { Product } from './components/Product';
import { Cart } from './components/Cart';

function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
     </Router>
    </div>
  );
}

export default App;
