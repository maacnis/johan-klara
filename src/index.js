// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/scrollToTop';

ReactDOM.render((
  <BrowserRouter>
	<ScrollToTop>
    	<App />
	</ScrollToTop>
  </BrowserRouter>
), document.getElementById('root'))