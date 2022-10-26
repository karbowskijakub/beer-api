import React from 'react';
import { Icon, FavButton } from './RemoveFav.styles';

const RemoveFav = ({ items, setFavourites, saveToLocalStorage }) => {
  const handleRemove = (id) => {
    const arr = items.filter((item) => item.id !== id);
    setFavourites(arr);
    saveToLocalStorage(arr);
    console.log(items);
  };

  return items?.map((item) => (
    <FavButton key={item.id} onClick={() => handleRemove(item.id)}>
      <Icon />
    </FavButton>
  ));
};

export default RemoveFav;
