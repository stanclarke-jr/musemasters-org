import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../src/components/styles/GlobalStyles';
import Home from './components/core/Home';
import LogInPage from './components/auth/LogInPage';
import CreateAcctPage from './components/auth/CreateAcctPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<LogInPage />} />
        <Route path="create-account" element={<CreateAcctPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
