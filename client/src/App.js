import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../src/components/styles/GlobalStyles';
import Home from './components/core/Home';
import LogInPage from './components/auth/LogInPage';
import CreateAcctPage from './components/auth/CreateAcctPage';

function App() {
  // TODO: create a guarded route for log in and create account pages
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="create-account" element={<CreateAcctPage />} />
        {/* <Route path="profile" elment={<ProfilePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
