import Film from '../film';
import User from '../user';

type FilmProps = {
  films : Film[],
  user: User,
  favoriteFilms : Film[],
}

export default FilmProps;
