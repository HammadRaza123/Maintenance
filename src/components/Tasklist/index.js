import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
const Component = ({ createdAt = '', submittedBy = '', assignedVendors = '', areacode = '', description = '',
    onPress = () => { }, status = '', phone = '' }) => {
    return (
        <TouchableOpacity style={styles.detailedtask} onPress={onPress} activeOpacity={.8}>
            <Image
                style={styles.TaskLogo}
                source={require('../../assets/images/taskicon.png')}
            />
            <View style={styles.textSection}>
                <Text style={styles.createdAtText}>{createdAt}</Text>
                <Text style={styles.titletext}>{submittedBy}</Text>
                <Text style={styles.descriptiontext}>
                    Assigned to : {assignedVendors}</Text>
                <Text style={styles.descriptiontext}>{areacode}</Text>
                <Text style={styles.descriptiontext}>{description}</Text>
                <Text style={styles.descriptiontext}>phone #:{phone}</Text>
            </View>

            <View style={styles.buttonStyle}>
                <Text style={[styles.newButtonText, status === 'Pending' ? styles.pendingButtonText : status === 'Closed' ? styles.closedButtonText : {}]}>{status}</Text>
            </View>

        </TouchableOpacity>
    );
};
export default Component;
