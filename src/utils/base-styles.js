import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import NProgressCSS from './nprogress';

const DefaultStyles = createGlobalStyle`
  :root {
    --baseFont: system-ui;
    --darkblue: #2A3757;
    --lightblue: #37426C;
    --lightgray: #f6f6f6;
    --white: #fff;
    --gray: #E3E3E3;
    --success: #358A87;
    --danger: #935280;
    --warning: #ffa003;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 1;
    font-family: var(--baseFont);
    color: var(--black);
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  a {
    text-decoration: none;
    color: var(--white);
  }
  input {
    font-family: var(--baseFont);
  }
  button {
    user-select: none;
    &:active {
      transform: scale(0.95);
    }
  }
`;

const BaseStyles = () => (
  <Fragment>
    <NProgressCSS />
    <DefaultStyles />
  </Fragment>
);

export default BaseStyles;
