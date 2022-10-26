import React from 'react';
import FavBeers from '../../components/organisms/FavBeers/FavBeers';
const Favourites = ({ favourites, setFavourites, saveToLocalStorage }) => {
  return (
    <>
      <FavBeers items={favourites} setFavourites={setFavourites} saveToLocalStorage={saveToLocalStorage} />
    </>
  );
};

export default Favourites;
