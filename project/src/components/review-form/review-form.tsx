import { useState } from 'react';
import ReviewFormProps from '../../types/props/review-form-props';
import { lightenDarkenColor } from '../../utils';
import ReviewFormData from '../../types/review-form-data';
import { DARKEN_COEFFICIENT, DEFAULT_FILM_RATING, LIGHTEN_COEFFICIENT } from '../../constants';
import RatingStars from '../rating-stars/rating-stars';

function ReviewForm({film} : ReviewFormProps) : JSX.Element{
  const [reviewFormData, setReviewFormData] = useState<ReviewFormData>({rating: DEFAULT_FILM_RATING, reviewText: ''});

  const fieldChangeHandler = (evt : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) : void => {
    const target = evt.target as HTMLTextAreaElement | HTMLInputElement;

    if(target instanceof HTMLTextAreaElement){
      setReviewFormData({...reviewFormData, reviewText: target.value});
    }
    else if(target instanceof HTMLInputElement){
      setReviewFormData({...reviewFormData, rating: +target.value});
    }

  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__htmlForm">

        <RatingStars fieldChangeHandler={fieldChangeHandler} rating={reviewFormData.rating}/>

        <div className="add-review__text" style={{backgroundColor: lightenDarkenColor(film?.backgroundColor, LIGHTEN_COEFFICIENT)}}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewFormData.reviewText} onChange={fieldChangeHandler}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" style={{color: lightenDarkenColor(film?.backgroundColor, DARKEN_COEFFICIENT)}}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
