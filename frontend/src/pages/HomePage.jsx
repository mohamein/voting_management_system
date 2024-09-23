import { useNavigate } from 'react-router-dom';
import Main from '../components/Main';

const HomePage = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('token'));
  if (!token) {
    navigate('/login');
  }
  return (
    <div className="h-screen bg-[#ededed]">
      {/* Main content */}
      <Main />
    </div>
  );
};

export default HomePage;
