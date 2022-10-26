import React from 'react';
import { Card, CardInner, CardFront, CardBack, TitleDiv, ImgDiv, FavButton, StyledIcon, Icon } from './BeerItem.styles';
import { useEffect, useState } from 'react';
import AddFav from '../../atoms/AddFavButton/AddFav';

const BeerItem = ({ item, setFavourites, handleClick }) => {
  return (
    <CardInner>
      <Card>
        <CardFront>
          <TitleDiv>
            <AddFav item={item} setFavourites={setFavourites} handleClick={handleClick}></AddFav>

            <div>
              <h1>{item.name}</h1>
            </div>
          </TitleDiv>
          <ImgDiv>
            <img src={item.image_url} alt="" />
          </ImgDiv>
        </CardFront>

        <CardBack>
          <ul>
            <li>
              <strong>Brewed in:</strong> {item.first_brewed}
            </li>
            <li>
              <strong>Yeast:</strong> {item.ingredients.yeast}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
            <li>
              <strong>Tips:</strong> {item.brewers_tips}
            </li>
          </ul>
        </CardBack>
      </Card>
    </CardInner>
  );
};

export default BeerItem;
