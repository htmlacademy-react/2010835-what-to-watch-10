type RatingStarProps = {
  fieldChangeHandler : (evt : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  elementNumber : number,
  rating : number,
};

export default RatingStarProps;
