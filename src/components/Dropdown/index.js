import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import styles from './styles';
import Colors from '../../utills/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { width, height, totalSize } from 'react-native-dimension';
import ModalDropdown from 'react-native-modal-dropdown';
const Component = ({showLabel, dropdownLabel, defaultValue, option, onselect, LabelValue }) => {
    return (
        <View style={styles.dropdownView}>
           {showLabel &&  <Text style={styles.dropdownLabel}>{dropdownLabel}</Text>}
            <ModalDropdown style={styles.dropdownField}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownStyle}
                dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}
                options={option}
                children={<View style={styles.Placeholders}>
                     {LabelValue && <Text style={styles.dropdownText}>{LabelValue}</Text>}
                    <Text style={styles.dropdownText}>{defaultValue}</Text>
                    <Icon style={styles.dropdownIcon} name="angle-down" /></View>}
                    onSelect={onselect}
            />
        </View>
    );
};
export default Component;
