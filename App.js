import React from 'react';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <header>
              <div>Logo</div>
              <ul>
                <li><Link to={AboutUs} /></li>
                <li><Link to={Categories} /></li>
                <li><Link to={ContactUS} /></li>
                <li><Link to={AboutUs} /></li>
              </ul>
            </header>
            <section>this.props.children || <Home /></section>
            <footer>

            </footer>
          );
    }
}

export default App;
