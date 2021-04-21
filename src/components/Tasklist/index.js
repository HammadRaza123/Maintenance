import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import Colors from '../../utills/Colors';
import { height, width } from 'react-native-dimension';
const Component = ({ date, title, assigne, areacode, description,
    btnLabel, phone, btnStyle }) => {
    return (
            <View style={styles.detailedtask}>
                <Image
                    style={styles.TaskLogo}
                    source={require('../../assets/images/taskicon.png')}
                />
                <View style={styles.textSection}>
                    <Text style={styles.datetext}>{date}</Text>
                    <Text style={styles.titletext}>{title}</Text>
                    <Text style={styles.descriptiontext}>
                        Assigned to : {assigne}</Text>
                    <Text style={styles.descriptiontext}>{areacode}</Text>
                    <Text style={styles.descriptiontext}>{description}</Text>
                    <Text style={styles.descriptiontext}>phone #:{phone}</Text>
                </View>

                <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={[styles.newButtonText,btnLabel==='Pending' ? styles.pendingButtonText:btnLabel==='Closed'? styles.closedButtonText :{}]}>{btnLabel}</Text>
                </TouchableOpacity>

            </View>
    );
};
export default Component;
