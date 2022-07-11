const getRandomPositiveNumber = (min : number, max : number) : number => {
  if(min < 0 || max < 0){
    throw new Error('Аргументы функции не могут быть меньше нуля.');
  }
  if(min >= max){
    throw new Error ('Аргумент функции "min" не может быть больше или равен аргументу функции "max".');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getRandomPositiveNumber };
