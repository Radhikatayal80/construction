import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import AddDeliveryAddress from './components/AddDeliveryAddress';
import Admin from './components/Admin';
import Bhatta from './components/Bhatta';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import InventeryHealth from './components/InventeryHealth';
import Listing from './components/Listing';
import Order from './components/Order';
import Payment from './components/Payment';
import PaymentMethod from './components/PaymentMethod';
import RatingAndReviews from './components/RatingAndReviews';
import Register from './components/Register';
import SelectAddress from './components/SelectAddress';
import Supplier from './components/Supplier';
import Login from './components/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account" element={<Account />} />
      <Route path="/add-delivery-address" element={<AddDeliveryAddress />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/bhatta" element={<Bhatta />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory-health" element={<InventeryHealth />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/order" element={<Order />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment-method" element={<PaymentMethod />} />
      <Route path="/rating-reviews" element={<RatingAndReviews />} />
      <Route path="/register" element={<Register />} />
      <Route path="/select-address" element={<SelectAddress />} />
      <Route path="/supplier" element={<Supplier />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
