import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import PromoCardProps from '../src/types/promo-card-props';
import {films} from '../src/mock/films';

const promoCardProps : PromoCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoCardProps={promoCardProps} films={films}/>
  </React.StrictMode>,
);
