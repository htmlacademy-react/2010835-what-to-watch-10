import { MAX_FILM_RATING } from '../../constants';
import RatingStarsProps from '../../types/props/rating-stars-props';
import RatingStar from './rating-star/rating-star';

function RatingStars({fieldChangeHandler, rating} : RatingStarsProps) : JSX.Element{

  const stars = (new Array(MAX_FILM_RATING)).fill(1).map((a,i)=> ++i).reverse();

  return (
    <div className="rating">
      <div className="rating__stars" >
        {stars.map((element) => <RatingStar key={element} fieldChangeHandler={fieldChangeHandler} elementNumber={element} rating={rating}/>)}
      </div>
    </div>
  );
}

export default RatingStars;
