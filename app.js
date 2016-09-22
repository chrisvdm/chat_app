import React from 'react'
import { render } from 'react-dom'
// Move React stuff to index.js

// Custom components
import MessageBox from './modules/MessageBox';
// Renders DOM
render(
  <MessageBox/>,
  document.getElementById('messageWindow')
);
