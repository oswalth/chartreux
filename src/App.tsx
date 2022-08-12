import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bookings from './pages/Bookings';
import { theme } from './theme';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/">
          <Route index element={<Bookings />} />
          <Route path="clients">
            <Route index element={<Bookings />} />
          </Route>
          <Route path="bookings">
            <Route index element={<Bookings />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
