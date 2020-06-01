import React from 'react';
import {ScrollView} from 'react-native';

import AnimatedExample from './AnimatedExample';
import BasicExample from './BasicExample';
import MaskExample from './MaskExample';
import UnderlineExample from './UnderlineExample';
import FormattingExample from './FormattingExample';

const style = {flex: 1, backgroundColor: '#fff'};

const App = () => (
  <ScrollView style={style}>
    <AnimatedExample />
    <FormattingExample />
    <MaskExample />
    <UnderlineExample />
    <BasicExample />
  </ScrollView>
);

export default App;
