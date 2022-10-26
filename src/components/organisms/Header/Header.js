import React from 'react';
import { Wrapper, Container, ImageBox, SearchContainer } from './Header.styles';
import beerPhoto from '../../../assets/icons/beer.svg';
import SearchBar from '../../atoms/SearchBar/SearchBar';
const Header = ({ setQuery }) => {
  return (
    <Wrapper>
      <Container>
        <ImageBox>
          <img src={beerPhoto}></img>
        </ImageBox>
        <SearchContainer>
          <SearchBar getQuery={(q) => setQuery(q)} />
        </SearchContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
