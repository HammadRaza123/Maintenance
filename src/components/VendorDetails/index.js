import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
const Component = ({ nameTitle, detailTitle, data }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.VendorDetailRow}>
                <Text style={styles.detailTitle}>{nameTitle}</Text>
                <Text style={styles.detailTitle}>{detailTitle}</Text>
            </View>
            {data.map(item =>
                <View style={styles.VendorDetailRow}>
                    <Text style={styles.detailText}>{item.label}</Text>
                    <Text style={styles.detailText}>{item.value}</Text>
                </View>
            )}
        </View>
    );
};
export default Component;
