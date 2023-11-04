import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import { AppContext } from '~/context/appContext';

const Header = () => {
  const nagivate = useNavigate();
  const { handleStateChange, userType } = useContext(AppContext);

  const handleLogout = () => {
    handleStateChange('', 'userType');
    nagivate('/', { replace: true });
  };

  return (
    <header className="w-screen flex justify-between p-4">
      <Link to="/">
        <h1 className="text-3xl font-bold text-left text-blue-500 border border-blue-500 rounded px-2 m-0">
          Quizer
        </h1>
      </Link>

      {userType ? (
        <Button onClick={handleLogout} className="cursor-pointer">
          Logout
        </Button>
      ) : null}
    </header>
  );
};

export default Header;
