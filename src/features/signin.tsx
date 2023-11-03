import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import Button from '~/components/Button';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('');

  const handleLogin = (type: string) => {
    setUserType(type);
    console.log('hello');
    navigate(type === 'admin' ? '/admin' : '/answers');
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
