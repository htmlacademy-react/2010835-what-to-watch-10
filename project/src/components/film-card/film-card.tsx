import { Link } from 'react-router-dom';
import FilmCardProps from '../../types/props/film-card-props';


function FilmCard({film} : FilmCardProps) : JSX.Element{

  return (
    <div className="small-film-card catalog__films-card" data-id={film.id} >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id.toString()}`}>{film.name}</Link>
      </h3>
    </div>
  );
}

export default FilmCard;
