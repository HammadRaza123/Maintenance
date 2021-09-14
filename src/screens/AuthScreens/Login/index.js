import React, { useState } from 'react';
import { Image, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../assets/images/logo.png';
import Button from '../../../components/Button';
import { ForgotModal } from '../../../components/CustomModal';
import { InputField } from '../../../components/InputField';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { login } from '../../../Redux/Actions/Auth';
import { SignIn } from '../../../Services/Auth';
import { Reset_Password } from '../../../Services/Request';
import Appcolor from '../../../utills/Colors';
import styles from './styles';
export default function Login(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [userName, setUserName] = useState('malik.abdullah');
  const [password, setPassword] = useState('abc123');
  const [forgotModal, setForgotModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [sendingStatus, setSendingStatus] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [userNameErrorMsg, setUserNameErrorMsg] = useState('');
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const togglePassword = () => { setPasswordVisibility(!passwordVisibility) }
  const closeModal = () => { setForgotModal(false) }
  const onChangeUserName = (value) => {
    setUserName(value)
    if (value.length < 3) {
      setUserNameErrorMsg('User Name is too short')
      return false
    } else {
      setUserNameErrorMsg('')
      return true
    }
  }
  const onChangePassword = (value) => {
    setPassword(value)
    if (value.length < 6) {
      setPasswordErrorMsg('Password is too short')
      return false
    } else {
      setPasswordErrorMsg('')
      return true
    }
  }
  const onChangeEmail = (value) => {
    setEmail(value)
    if (email.length > 2) {
      setEmailErrorMsg('');
      return true;
    } else {
      setEmailErrorMsg('Invalid User');
      return false;
    }
  }
  const sendEmail = async () => {
    setSendingStatus(true)
    if (onChangeEmail(email)) {
      const response = await Reset_Password(userName)
      if (response?.success) {
        setSendingStatus(false)
        ToastAndroid.show('Request Sent Successfully', ToastAndroid.SHORT);
      }
      else {
        setSendingStatus(false)
        ToastAndroid.show('Request Failed', ToastAndroid.SHORT);
      }
    } else {
      setSendingStatus(false)
      ToastAndroid.show('Please Add Valid User', ToastAndroid.SHORT);
    }
  }
  const _signIn = async () => {
    setIsLoading(true)
    if (onChangeUserName(userName) == true && onChangePassword(password) == true) {
      let details = {
        username: userName,
        password: password
      };
      const response = await SignIn(details)
      if (response?.success) {
        setIsLoading(false)
        dispatch(login(response.data))
        ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
      }
      else {
        setIsLoading(false)
        ToastAndroid.show('Invalid user details', ToastAndroid.SHORT);
        console.log(response);
      }
    }
  }

  return (
    <ScreenWrapper statusBarColor={Appcolor.transparent}>
      <View style={styles.mainViewContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.headingText}>Welcome to rentdigi</Text>
        <InputField placeholder={'Enter user name'} suffix suffixIcon={'user'} value={userName}
          onChangeText={(value) => onChangeUserName(value.trim())} errorEnabled={userNameErrorMsg != ''}
          errorMsg={userNameErrorMsg} />
        <InputField placeholder={'Enter password'} suffix suffixIcon={passwordVisibility ? 'eye' : 'eye-off'}
          secureTextEntry={passwordVisibility} onPressSuffix={() => togglePassword()}
          value={password} onChangeText={(value) => onChangePassword(value)}
          errorEnabled={passwordErrorMsg != ''} errorMsg={passwordErrorMsg} />
        <Button isLoading={isLoading} loaderColor={Appcolor.white} title="Login" onPress={_signIn} containerStyle={styles.btnStyle} />
        <TouchableOpacity style={styles.forgotBtn} onPress={() => setForgotModal(true)}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <ForgotModal modalHeading='Forgot password' onClose={() => closeModal()} isVisible={forgotModal}
        cancelBtnTextStyle={styles.cancelBtnTextStyle} onPressCancel={() => closeModal()}
        onPressSend={() => sendEmail()} value={email} onChangeText={(value) => onChangeEmail(value.trim())}
        errorEnabled={emailErrorMsg != ''} errorMsg={emailErrorMsg} sendingStatus={sendingStatus}
        modalBodyText='Enter your user name, you will receive details to retreive your password'
      />
    </ScreenWrapper>
  );
}
