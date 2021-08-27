import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { height, width } from 'react-native-dimension';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from '../../utills/Colors';
import Button from '../Button';
import { InputField, MultiInput } from '../InputField';
import styles from './styles';
export const CustomModal = ({
    isVisible = false,
    modalHeading = '',
    onClose = () => { },
    onPressCancel = () => { },
    onPressYes = () => { },
    placeholder = '',
    cancelBtnTextStyle = {}
}) => {
    return (<Modal isVisible={isVisible} >
        <View style={styles.modalContainer}>

            <View style={styles.closeContainer}>
                <Text style={styles.modalHeading}>{modalHeading}</Text>
                <TouchableOpacity onPress={onClose} >
                    <AntDesign name="closecircle" size={height(3.5)} color={AppColors.black} />
                </TouchableOpacity>
            </View>

            <View style={styles.bodyContainer}>
                <MultiInput containerStyle={styles.inputBox}
                    placeholder={placeholder}
                />
                <View style={styles.row}>
                    <Button containerStyle={styles.noButtonStyle} btnTextStyle={cancelBtnTextStyle}
                        title={'Cancel'} onPress={onPressCancel} />
                    <Button containerStyle={styles.buttonStyle}
                        title={'Yes'} onPress={onPressYes} />
                </View>

            </View>
        </View>
    </Modal>)
};

export const ForgotModal = ({
    isVisible = false,
    modalHeading = '',
    value = '',
    onChangeText = '',
    modalBodyText = '',
    onClose = () => { },
    onPressCancel = () => { },
    onPressSend = () => { },
    errorMsg = '',
    errorEnabled = false,
    cancelBtnTextStyle = {}
}) => {
    return (<Modal isVisible={isVisible} >
        <View style={styles.modalContainer}>

            <View style={styles.closeContainer}>
                <Text style={styles.modalHeading}>{modalHeading}</Text>
                <TouchableOpacity onPress={onClose} >
                    <AntDesign name="closecircle" size={height(3.5)} color={AppColors.black} />
                </TouchableOpacity>
            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.modalBodyText}>{modalBodyText}</Text>
                <InputField mainContainer={styles.inputBox} placeholder='email' value={value}
                    onChangeText={(value) => onChangeText(value)} errorMsg={errorMsg} errorEnabled={errorEnabled}
                />
                <View style={styles.row}>
                    <Button containerStyle={styles.noButtonStyle} btnTextStyle={cancelBtnTextStyle}
                        title={'Cancel'} onPress={onPressCancel} />
                    <Button containerStyle={styles.buttonStyle}
                        title={'Send Email'} onPress={onPressSend} />
                </View>

            </View>
        </View>
    </Modal>)
};