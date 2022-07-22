import { useState } from 'react';
import ReviewFormProps from '../../types/props/review-form-props';
import { lightenDarkenColor } from '../../utils';
import ReviewFormData from '../../types/review-form-data';
import { DARKEN_COEFFICIENT, DEFAULT_FILM_RATING, LIGHTEN_COEFFICIENT } from '../../constants';

function ReviewForm({film} : ReviewFormProps) : JSX.Element{
  const [reviewFormData, setReviewFormData] = useState<ReviewFormData>({rating: DEFAULT_FILM_RATING, reviewText: ''});

  const fieldChangeHandle = (evt : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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
        <div className="rating">
          <div className="rating__stars" >
            <input className="rating__input" id="star-10" type="radio" name="rating" value="10" defaultChecked={reviewFormData.rating === 10} onChange={fieldChangeHandle}/>
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9" defaultChecked={reviewFormData.rating === 9} onChange={fieldChangeHandle}/>
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked={reviewFormData.rating === 8} onChange={fieldChangeHandle}/>
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value="7" defaultChecked={reviewFormData.rating === 7} onChange={fieldChangeHandle} />
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value="6" defaultChecked={reviewFormData.rating === 6} onChange={fieldChangeHandle} />
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" defaultChecked={reviewFormData.rating === 5} onChange={fieldChangeHandle} />
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" defaultChecked={reviewFormData.rating === 4} onChange={fieldChangeHandle} />
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked={reviewFormData.rating === 3} onChange={fieldChangeHandle} />
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" defaultChecked={reviewFormData.rating === 2} onChange={fieldChangeHandle} />
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" defaultChecked={reviewFormData.rating === 1} onChange={fieldChangeHandle} />
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text" style={{backgroundColor: lightenDarkenColor(film?.backgroundColor, LIGHTEN_COEFFICIENT)}}>
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewFormData.reviewText} onChange={fieldChangeHandle}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" style={{color: lightenDarkenColor(film?.backgroundColor, DARKEN_COEFFICIENT)}}>Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
