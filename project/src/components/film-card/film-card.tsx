import { Link } from 'react-router-dom';
import FilmCardProps from '../../types/props/film-card-props';


function FilmCard({imageSrc, title, id} : FilmCardProps) : JSX.Element{

  return (
    <div className="small-film-card catalog__films-card" data-id={id} >
      <div className="small-film-card__image">
        <img src={imageSrc} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id.toString()}`}>{title}</Link>
      </h3>
    </div>
  );
}

export default FilmCard;
