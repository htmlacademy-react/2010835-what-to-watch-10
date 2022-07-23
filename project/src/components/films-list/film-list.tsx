import { useState } from 'react';
import Film from '../../types/film';
import FilmListProps from '../../types/props/films-list-props';
import FilmCard from '../film-card/film-card';


function FilmList({films} : FilmListProps) : JSX.Element{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ activeCardId, setActiveCardId ] = useState(0);

  function mouseOverHandler(evt : React.MouseEvent<HTMLElement>){
    const target = evt.target as HTMLElement;
    if(target.classList.contains('small-film-card__image') && typeof(target.parentElement?.dataset.id) === 'string'){
      setActiveCardId(Number(target.parentElement.dataset.id));
    }
  }

  return (
    <div className="catalog__films-list" onMouseOver={mouseOverHandler}>
      {films.map((element : Film) => (
        <FilmCard key={element.id} film={element}/>
      ))}
    </div>
  );
}

export default FilmList;
