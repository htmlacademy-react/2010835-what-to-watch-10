import Film from '../film';
import User from '../user';


type MainProps = {
  promoFilm : Film,
  films : Film[],
  user : User,
  favoriteFilms: Film[],
}

export default MainProps;
