import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
const Component = ({ nameTitle, detailTitle, data, textColor, fontWeight }) => {

    return (
        <View>
            {/* <View style={styles.LabelDetailRow}>
                <Text style={styles.detailTitle}>{nameTitle}</Text>
                <Text style={styles.detailTitle}>{detailTitle}</Text>
            </View> */}
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
