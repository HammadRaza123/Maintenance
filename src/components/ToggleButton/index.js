import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import styles from './styles';
const Component = ({ toggleLabel, trackOffColor, trackOnColor, value, onValueChange }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.toggleLabel}>{toggleLabel}</Text>
      <Switch
        trackColor={{ false: trackOffColor, true: trackOnColor }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};
export default Component;
