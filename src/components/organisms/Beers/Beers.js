import React from 'react';

import { Wrapper, BeersSection } from './Beers.styles';
import BeerItem from '../../molecules/BeerItem/BeerItem';
import { useEffect, useState } from 'react';

const Beers = ({ items, favourites, setFavourites, handleClick }) => {
  return (
    <Wrapper>
      <BeersSection>
        {items.map((item) => (
          <BeerItem key={item.id} item={item} favourites={favourites} setFavourites={setFavourites} handleClick={handleClick}></BeerItem>
        ))}
      </BeersSection>
    </Wrapper>
  );
};

export default Beers;
