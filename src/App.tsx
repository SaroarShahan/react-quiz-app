import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from '~/features/signin';
import Admin from './features/admin';
import Users from './features/users';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
