import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Button from '~/components/Button';
import { AppContext } from '~/context/appContext';

const Header = () => {
  const navigate = useNavigate();
  const { handleStateChange, userType } = useContext(AppContext);

  const handleLogout = () => {
    handleStateChange('', 'userType');
    navigate('/', { replace: true });
  };

  const renderAdminLinks = () => {
    return (
      <ul className="flex gap-4">
        <li>
          <NavLink
            to="/questions"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'transition duration-300 ease-in-out hover:text-blue-500'
            }
          >
            Question
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/answers"
            className={({ isActive }) =>
              isActive ? 'text-blue-500' : 'transition duration-300 ease-in-out hover:text-blue-500'
            }
          >
            Answers
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <header className="w-screen flex justify-between p-4 mb-8">
      <h1 className="text-3xl font-bold text-left text-blue-500 border border-blue-500 rounded px-2 m-0">
        Quizer
      </h1>

      {userType === 'admin' && renderAdminLinks()}

      {userType ? (
        <Button onClick={handleLogout} className="cursor-pointer">
          Logout
        </Button>
      ) : null}
    </header>
  );
};

export default Header;
