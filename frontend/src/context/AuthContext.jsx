import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const login = async (username, password) => {
    const resp = await axios.post('http://localhost:5000/api/v1/users/login', {
      username,
      password,
    });
    localStorage.setItem('token', JSON.stringify(resp.data.token));
    setUser(resp.data);

    console.log(resp.data);
  };
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
