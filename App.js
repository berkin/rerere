import React from 'react';
import {Link} from 'react-router';
import Home from './components/Home';
import Login from './components/Login';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
          <div>
            <header>
              <div>Logo</div>
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/categories'>Categories</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>
              </ul>
              
              <ul> 
                <li><Link to='/login'>Login</Link></li>
              </ul>
            </header>
            <section>{this.props.children || <Home />}</section>
            <footer>
              Foot note
            </footer>
          </div>
          );
    }
}

export default App;
