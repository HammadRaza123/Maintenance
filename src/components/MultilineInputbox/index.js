
import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import Colors from '../../utills/Colors';
const Component = ({inputLabel,placeholder }) => {
    return (
        <View>
            <Text style={styles.commentLabel}>{inputLabel}</Text>
            <TextInput style={styles.commentBox} textAlignVertical='top'
                multiline placeholderTextColor={Colors.white44}
                numberOfLines={4}
                placeholder={placeholder} />
        </View>
    );
};
export default Component;
