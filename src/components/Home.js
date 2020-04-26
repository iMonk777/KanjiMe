import React, {Component} from 'react';
import {Container, Header, Tab, Tabs, ScrollableTab} from 'native-base';
import LearnTab from './Learning/LearnTab';
import PracticeTab from './Practice/PracticeTab';
import ChalangeTab from './Chalange/ChalangeTab';

class Home extends Component {
  render() {
    return (
      <Container>
        <LearnTab />
        {/* <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Learn">
            <LearnTab />
          </Tab>
          <Tab heading="Practice">
            <PracticeTab />
          </Tab>
          <Tab heading="Chalange">
            <ChalangeTab />
          </Tab>
        </Tabs> */}
      </Container>
    );
  }
}

export default Home;
