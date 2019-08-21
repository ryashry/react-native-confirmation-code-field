import React from 'react';
import { View, Text } from 'react-native';
import CodeFiled from 'react-native-confirmation-code-field';

import styles from '../commonStyles';

export default function CodeLength() {
  return (
    <View style={styles.rootView}>
      <Text style={styles.typing}>codeLength?: number</Text>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'codeLength={3}'}</Text>
        <CodeFiled onFulfill={console.log} codeLength={3} />
      </View>
      <View style={styles.sectionDemo}>
        <Text
          style={styles.preText}
        >{`codeLength={${CodeFiled.defaultProps.codeLength}} (default)`}</Text>
        <CodeFiled onFulfill={console.log} />
      </View>
      <View style={styles.sectionDemo}>
        <Text style={styles.preText}>{'codeLength={7}'}</Text>
        <CodeFiled onFulfill={console.log} codeLength={7} />
      </View>
    </View>
  );
}
