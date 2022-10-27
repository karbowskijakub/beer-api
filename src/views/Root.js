import { GlobalStyle } from '../assets/styles/globalStyles';
import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import Template from '../templates/Template/Template';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainView from '../templates/MainView/MainView';
import Favourites from '../templates/FavouritesView/Favourites';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Root() {
  const [favourites, setFavourites] = useState([]);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');

  const saveToLocalStorage = (items) => {
    localStorage.setItem('FAVOURITE-BEER', JSON.stringify(items));
  };

  const handleClick = (item) => {
    setFavourites([...favourites, item]);
    saveToLocalStorage([...favourites, item]);
  };

  useEffect(() => {
    const beerFav = JSON.parse(localStorage.getItem('FAVOURITE-BEER'));

    setFavourites(beerFav);
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://api.punkapi.com/v2/beers?beer_name=${query ? query : 'Trashy Blonde' & 'Dana -IPA is Dead'} `);
      setItems(result.data);
 
    };
    fetchItems();
  }, [query]);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Template>
          <Routes>
            <Route
              end
              path="/"
              element={<MainView items={items} setQuery={setQuery} favourites={favourites} setFavourites={setFavourites} handleClick={handleClick} />}
            />
            <Route
              end
              path="/favourites"
              element={
                <Favourites
                  items={items}
                  setQuery={setQuery}
                  favourites={favourites}
                  setFavourites={setFavourites}
                  saveToLocalStorage={saveToLocalStorage}
                />
              }
            />
          </Routes>
        </Template>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
