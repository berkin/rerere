import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './App';

import AboutUs from './components/AboutUs';
import Categories from './components/Categories';
import Product from './components/Product';
import ContactUs from './components/ContactUs';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='/about-us' component={AboutUs} />

      <Route path='/categories' component={Categories}>
        <Route path='/:product-slug' component={Product} />
      </Route>

      <Route path='/contact-us' component={ContactUs} />
    </Route>
  </Router>
), document.getElementById('app'));