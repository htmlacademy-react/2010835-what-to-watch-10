export enum AuthorisationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum AppRoute {
  SignIn = '/login',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Mylist = '/mylist',
}

export const DARKEN_COEFFICIENT = -80;
export const LIGHTEN_COEFFICIENT = 10;

export const DEFAULT_FILM_RATING = 0;
export const MAX_FILM_RATING = 10;
