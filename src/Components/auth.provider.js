import React, { useState } from "react"
import {
    useNavigate,
  } from 'react-router-dom';

const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    const fakeAuth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
    });

    const handleLogin = async() => {
        const token = await fakeAuth();
        
        setToken(token);
        navigate('/dashboard');
    }

    const handleLogout = () => {
        setToken(null);
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
      };

    return (
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
    );
}
const useAuth = () => {
    return React.useContext(AuthContext);
};

export { AuthProvider, AuthContext, useAuth }