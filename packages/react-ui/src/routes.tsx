import { Route, Routes } from 'react-router-dom';
import App from './views/App';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default AppRoutes;
