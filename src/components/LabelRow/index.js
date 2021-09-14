import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
const Component = ({ data, textColor, fontWeight }) => {

    return (
        <View>
            {data.map(item =>
                <View style={styles.LabelDetailRow}>
                    <Text style={[styles.detailText, { color: textColor }, { fontWeight: fontWeight }]}>{item.label}</Text>
                    <Text style={[styles.detailText, { color: textColor }]}>{item.value}</Text>
                </View>
            )}
        </View>
    );
};
export default Component;
