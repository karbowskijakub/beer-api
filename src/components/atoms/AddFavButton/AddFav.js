import React from 'react';
import { Icon, FavButton } from './AddFav.styles';

const AddFav = ({ item, favourites, setFavourites, handleClick }) => {
  return (
    <FavButton onClick={() => handleClick(item)}>
      <Icon />
    </FavButton>
  );
};

export default AddFav;
