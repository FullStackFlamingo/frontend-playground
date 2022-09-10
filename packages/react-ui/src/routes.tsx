import { Route, Routes } from 'react-router-dom';
import { MainNavigation } from './components/main-navigation/MainNavgiation';
import { SkipToContent } from './components/SkipToContent';
import Home from './views/Home';

function AppRoutes() {
  return (
    <div>
      <SkipToContent />
      <MainNavigation />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;
