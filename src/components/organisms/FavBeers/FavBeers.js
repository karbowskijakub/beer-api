import React from 'react';
import { Wrapper, Background, BeersSection } from './FavBeers.styles';
import FavBeerItem from '../../molecules/FavBeerItem/FavBeerItem';
import { useEffect, useState } from 'react';

const FavBeers = ({ items, setFavourites, saveToLocalStorage }) => {
  return (
    <>
      <Background>
        <Wrapper>
          <BeersSection>
          {items.map((item) => (
            <FavBeerItem key={item.id}  item={item} items={items} setFavourites={setFavourites} saveToLocalStorage={saveToLocalStorage}></FavBeerItem>
          ))}
          </BeersSection>
        </Wrapper>
      </Background>
    </>
  );
};

export default FavBeers;
