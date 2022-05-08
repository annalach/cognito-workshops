import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Index from './pages/Index';
import OAuthRedirect from './pages/OAuthRedirect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cb" element={<OAuthRedirect />} />
        <Route index element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
