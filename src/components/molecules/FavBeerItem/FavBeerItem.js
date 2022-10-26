import React from 'react';
import { Card, CardInner, CardFront, CardBack, TitleDiv, ImgDiv, FavButton, StyledIcon, Icon } from './FavBeerItem.styles';
import { useEffect, useState } from 'react';
import RemoveFav from '../../atoms/RemoveFavButton/RemoveFav';

const FavBeerItem = ({ items, setFavourites, saveToLocalStorage }) => {
  return (
    <>
      {items.map((item) => (
        <CardInner key={item.id}>
          <Card>
            <CardFront>
              <TitleDiv>
                <RemoveFav items={items} setFavourites={setFavourites} saveToLocalStorage={saveToLocalStorage}></RemoveFav>

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
      ))}
    </>
  );
};

export default FavBeerItem;
