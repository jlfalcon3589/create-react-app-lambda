import React, { Component } from 'react';

import Navbar from './components/navbarWrapper/navbarWrapper';
import Footer from './components/footerWrapper/footerWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
