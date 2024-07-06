import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from '../components/LoginCard';
import { AuthContext } from '@/context/AuthContext';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async () => {
    const result = await login(username, password);
    if (result) {
      navigate('/');
    }
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-[#ededed] ">
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
