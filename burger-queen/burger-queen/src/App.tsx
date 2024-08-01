import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Products from './components/Products';
import './App.css'
import KitchenOrders from './components/kitchenOrders';
import OrdersView from './components/OrdersView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/kitchenOrders" element={<KitchenOrders />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/ordersView" element={<OrdersView />} />
      </Routes>
    </Router>
  );
}

export default App;
