import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorisationStatus } from '../../constants';
import AddReview from '../../pages/add-review/add-review';
import Film from '../../pages/film/film';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import AppProps from '../../types/app-props';
import PrivateRoute from '../private-route/private-route';

function App({promoCardProps, films} : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main promoCardProps={promoCardProps} films={films}/>} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route path={AppRoute.Film} element={<Film/>}/>
        <Route path={AppRoute.AddReview} element={<AddReview/>}/>
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<NotFound/>} />
        <Route path={AppRoute.Mylist} element={<PrivateRoute authorisationStatus={AuthorisationStatus.NoAuth}><MyList/></PrivateRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
