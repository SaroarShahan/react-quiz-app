import { Link, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import useAppState from '~/hooks/useAppState';

const Header = () => {
  const nagivate = useNavigate();
  const appState = useAppState();

  const handleLogout = () => {
    appState.handleUserType('');
    nagivate('/');
  };

  return (
    <header className="w-screen flex justify-between p-4">
      <Link to="/">
        <h1 className="text-3xl font-bold text-left text-blue-500 border border-blue-500 rounded px-2 m-0">
          Quizer
        </h1>
      </Link>

      {appState?.userType ? (
        <Button onClick={handleLogout} className="cursor-pointer">
          Logout
        </Button>
      ) : null}
    </header>
  );
};

export default Header;
