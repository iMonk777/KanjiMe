import React, {Component} from 'react';
import {Container} from 'native-base';
import LearnTab from './Learning/LearnTab';

class Home extends Component {
  render() {
    return (
      <Container>
        <LearnTab />
      </Container>
    );
  }
}

export default Home;
