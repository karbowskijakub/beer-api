import React from 'react';
import Header from '../../components/organisms/Header/Header';
import Beers from '../../components/organisms/Beers/Beers';

const MainView = ({ setQuery, items, favourites, setFavourites, handleClick }) => {
  return (
    <>
      <Header setQuery={setQuery} />
      <Beers items={items} favourites={favourites} setFavourites={setFavourites} handleClick={handleClick} />
    </>
  );
};

export default MainView;
