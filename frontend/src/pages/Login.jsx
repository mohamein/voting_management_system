import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from '../components/LoginCard';
import axios from 'axios';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const resp = await axios.post(
      'https://voting-management-system-kxjt.onrender.com/api/v1/users/login',
      {
        username,
        password,
      }
    );
    localStorage.setItem('token', JSON.stringify(resp.data.token));
    localStorage.setItem('user', JSON.stringify(resp.data.user));

    console.log(resp.data);
    if (resp) {
      navigate('/');
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-[#ededed] ">
      {/* Login Card */}
      <LoginCard
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Login;
