import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';
import MainNavigation from './components/layouts/MainNavigation';


function App(){
  return(
    <div>
      <MainNavigation />
      <Routes>
          <Route path="/" element={<AllMeetupsPage />} exact/>
          <Route path="/favorites" element={<FavoritesPage /> } />
          <Route path="/newmeetups" element={<NewMeetupPage />} />
      </Routes>
    </div>
  );  

}
export default App;