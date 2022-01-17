import * as React from 'react';
import PropTypes from 'prop-types';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';
import UnstyledButtonCustom from "./Button";


function App() {
  return (
    <div className='landing'>
      <h1>Charcoal Grills only.</h1>
      <UnstyledButtonCustom  className='button'/>
    </div>
  );
}

export default App;
