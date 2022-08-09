import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bookings from './pages/bookings/Booking';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="bookings/*" element={<Bookings />} />
    </Routes>
  </BrowserRouter>
);

export default App;
