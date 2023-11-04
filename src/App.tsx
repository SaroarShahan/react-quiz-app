import { Route, Routes } from 'react-router-dom';

import SignIn from '~/features/signin';
import Questions from '~/features/questions/index';
import Answers from '~/features/answers/index';
import Layout from '~/layout/Layout';
import Home from '~/features/home';
import { AppContext } from '~/context/appContext';
import useAppState from '~/hooks/useAppState';
import { useMemo } from 'react';

function App() {
  const state = useAppState();

  const memoizedState = useMemo(() => state, [state]);

  return (
    <AppContext.Provider value={memoizedState}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/answers" element={<Answers />} />
        </Routes>
      </Layout>
    </AppContext.Provider>
  );
}

export default App;
