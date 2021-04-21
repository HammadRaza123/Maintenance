import React, {useState} from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './styles';
import Colors from '../../utills/Colors';
const Component = ({ toggleLabel, trackOffColor, trackOnColor}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text style={styles.toggleLabel}>{toggleLabel}</Text>
      <Switch
        trackColor={{ false: trackOffColor, true: trackOnColor }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
    );
};
export default Component;
