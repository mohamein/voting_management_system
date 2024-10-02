import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from '../components/LoginCard';
import { loginUser } from '@/lib/api/users.api';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const resp = await loginUser(username, password);
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
