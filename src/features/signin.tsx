import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

import Button from '~/components/Button';
import { AppContext } from '~/context/appContext';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { handleStateChange } = useContext(AppContext);

  const handleLogin = (user: string) => {
    handleStateChange(user, 'userType');
    navigate(user === 'admin' ? '/questions' : '/answers');
  };

  return (
    <div className="max-w-md mx-auto flex items-center justify-center h-[calc(100vh-110px)]">
      <div className="flex flex-col w-full border shadow-sm rounded px-6 py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Sign In</h2>

        <Button onClick={() => handleLogin('admin')} className="mb-2">
          Login as Admin
        </Button>
        <Button onClick={() => handleLogin('user')}>Login as User</Button>
      </div>
    </div>
  );
};

export default SignIn;
