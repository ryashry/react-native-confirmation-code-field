import React from 'react';
import {ScrollView} from 'react-native';

import AnimatedExample from './AnimatedExample';
import BasicExample from './BasicExample';

const style = {flex: 1};

const App = () => (
  <ScrollView style={style}>
    <AnimatedExample />
    <BasicExample />
  </ScrollView>
);

export default App;
