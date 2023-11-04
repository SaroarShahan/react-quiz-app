import { useContext } from 'react';
import { useNavigate } from 'react-router';

import Button from '~/components/Button';
import { AppContext } from '~/context/appContext';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const appState = useContext(AppContext);

  const handleLogin = (type: string) => {
    appState.handleUserType(type);
    navigate(type === 'admin' ? '/questions' : '/answers');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Sign In</h2>

      <Button onClick={() => handleLogin('admin')} classNames="mb-2">
        Login as Admin
      </Button>
      <Button onClick={() => handleLogin('user')}>Login as User</Button>
    </div>
  );
};

export default SignIn;
