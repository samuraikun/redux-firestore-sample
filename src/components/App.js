import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../components/header/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Container className='main'>
          <p>container</p>
        </Container>
      </div>
    );
  }
}

export default App;
