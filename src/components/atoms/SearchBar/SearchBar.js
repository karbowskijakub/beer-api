import React from 'react';
import { BoxDiv, InputField } from './SearchBar.styles';
import { useState } from 'react';

const SearchBar = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <BoxDiv
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <InputField
        id="outlined-password-input"
        label="Search beer"
        type="text"
        autoComplete="current-password"
        sx={{ input: { color: 'white' } }}
        value={text}
        onChange={(e) => onChange(e.target.value)}
      />
    </BoxDiv>
  );
};

export default SearchBar;
