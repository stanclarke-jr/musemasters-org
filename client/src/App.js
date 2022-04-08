import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from '../src/components/styles/GlobalStyles';
import Home from './components/core/Home';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
