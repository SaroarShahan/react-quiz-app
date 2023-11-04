import { ReactNode, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import { AppContext } from '~/context/appContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const { userType } = useContext(AppContext);

  useEffect(() => {
    if (!userType) {
      return navigate('/signin', { replace: true });
    } else if (userType === 'admin') {
      return navigate('/questions', { replace: true });
    } else if (userType === 'user') {
      return navigate('/answers', { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType]);

  return (
    <>
      <Header />

      <main className="container mx-auto px-4">{children}</main>
    </>
  );
};

export default Layout;
