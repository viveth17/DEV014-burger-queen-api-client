import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import './App.css'
import KitchenOrders from './components/kitchenOrders';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/kitchenOrders" element={<KitchenOrders />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
