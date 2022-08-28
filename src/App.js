import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Pages/dashboard';
import Register from './Pages/register';
import Contact from './Pages/contact';
import PageNotFound from './Pages/pagenotfound';
import Navigation from './Components/navigation';

import './App.css';
import Login from './Pages/login';


const AuthContext = React.createContext(null);

function App() {
  const [token, setToken] = React.useState(null);

  const fakeAuth = () =>
  new Promise((resolve) => {
      setTimeout(() => resolve('2342f2f1d131rf12'), 250);
  });

  const handleLogin = async() => {
      const token = await fakeAuth();
      setToken(token);
  }

  const handleLogout = () => {
      setToken(null);
  };

  return (
    <BrowserRouter>
      <AuthContext.Provider value={token}>
          <Navigation token={token} onLogout={handleLogout}/> 
          <Routes>
              <Route exact index element={<Dashboard/>} />
              <Route exact path="register" element={<Register />} />
              <Route exact path="login" element={<Login onLogin={handleLogin}/>} />
              <Route exact path="contact" element={<Contact/>} />

              <Route path="*" element={<PageNotFound />} />
          </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export {App , AuthContext};
