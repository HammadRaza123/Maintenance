import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { width } from 'react-native-dimension';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import AppColors from '../../utills/Colors';
import styles from './styles';

export const InputField = ({
  placeholder = '',
  value = '',
  onChangeText = () => { },
  secureTextEntry = false,
  suffix = false,
  multiline = false,
  suffixIcon = '',
  suffixStyle = {},
  errorMsg = '',
  onPressSuffix = () => { },
  mainContainer = {},
  textStyle = {},
  keyboardType = 'default',
  errorEnabled = false,
  onFocus = () => { },
  onBlur = () => { },
  focus = false
}) => {
  return (
    <View style={[styles.mainInputView, mainContainer]}>
      <View style={styles.inputSection}>
        <TextInput
          autoFocus={focus} onFocus={onFocus} onBlur={onBlur} style={[styles.inputText, textStyle]} placeholder={placeholder} value={value}
          onChangeText={onChangeText} secureTextEntry={secureTextEntry} autoCorrect={false} multiline={multiline}
          keyboardType={keyboardType} placeholderTextColor={AppColors.lightGrey} />
        {errorEnabled && <Animatable.Text useNativeDriver={true} animation="fadeInLeft" style={styles.errorMsg}>{errorMsg}</Animatable.Text>}
      </View>
      {suffix && <TouchableOpacity style={styles.suffixStyle} onPress={onPressSuffix}>
        <Feather name={suffixIcon} color={AppColors.inActiveColor} size={width(4)} style={[styles.iconStyle, suffixStyle]} />
      </TouchableOpacity>}
    </View>
  );
};

export const MultiInput = ({
  placeholder = '',
  containerStyle = '',
  userImage = null,
  username = '',
  value = '',
  onChangeText = () => { }
}) => {
  return (
    <View style={[styles.greyBox, containerStyle]}>
      <TextInput multiline={true} numberOfLines={5} style={styles.inputBox}
        placeholder={placeholder} value={value} onChangeText={onChangeText} />
      <View style={styles.row}>
        <Image source={userImage} style={styles.imageStyle} />
        <Text style={styles.reviewerName}>{username}</Text>
      </View>
    </View>
  );
};
