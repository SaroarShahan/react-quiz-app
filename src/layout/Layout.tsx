import { ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './Header';
import useAppState from '~/hooks/useAppState';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const appState = useAppState();

  useEffect(() => {
    if (!appState?.userType) {
      return navigate('/signin', { replace: true });
    } else if (appState.userType === 'admin') {
      return navigate('/questions', { replace: true });
    } else if (appState.userType === 'user') {
      return navigate('/answers', { replace: true });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appState.userType]);

  return (
    <>
      <Header />

      <main className="container mx-auto px-4">{children}</main>
    </>
  );
};

export default Layout;
