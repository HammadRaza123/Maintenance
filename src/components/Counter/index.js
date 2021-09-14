import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
const Component = ({ time, count, increaseCount, decreaseCount }) => {
    return (
        <View style={styles.MainCounterRow}>
            <View style={styles.LeftSection}>
                <Text style={styles.timeText}>{time}</Text>
                <TouchableOpacity style={styles.decreaseButton}
                    onPress={decreaseCount}>
                    <Icon style={styles.buttonIcon}
                        name="minus"
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.LeftSection}>
                <Text style={styles.timeText}>{count}</Text>
            </View>
            <TouchableOpacity style={styles.addButton}
                onPress={increaseCount}>
                <Icon style={styles.buttonIcon}
                    name="plus"
                />
            </TouchableOpacity>
        </View>
    );
};
export default Component;
