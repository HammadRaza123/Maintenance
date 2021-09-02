import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { InputField } from '../../../components/InputField';
import { ForgotModal } from '../../../components/CustomModal';
import { login } from '../../../Redux/Actions/Auth';
import styles from './styles';
import Appcolor from '../../../utills/Colors'
import logo from '../../../assets/images/logo.png'
import { SignIn } from '../../../Services/Auth';
export default function Login(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [email, setEmail] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [userName, setUserName] = useState('malik.abdullah');
  const [password, setPassword] = useState('abdullah');
  const [forgotModal, setForgotModal] = useState(false);
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
    if (emailReg.test(value)) {
      setEmailErrorMsg('');
      return true;
    } else {
      setEmailErrorMsg('Invalid Email');
      return false;
    }
  }
  const sendEmail = () => {
    if (onChangeEmail(email)) {
      closeModal()
    } else {
      console.log('no');
    }
  }
  const _signIn = async () => {
    if (onChangeUserName(userName) == true && onChangePassword(password) == true) {
      let details = {
        username: userName,
        password: password
      };
      const response = await SignIn(details)
      if (response?.success) {
        dispatch(login(response.data, password))
        ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
      }
      else {
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
        <Button title="Login" onPress={_signIn} containerStyle={styles.btnStyle} />
        <TouchableOpacity style={styles.forgotBtn} onPress={() => setForgotModal(true)}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <ForgotModal modalHeading='Forgot password' onClose={() => closeModal()} isVisible={forgotModal}
        cancelBtnTextStyle={styles.cancelBtnTextStyle} onPressCancel={() => closeModal()}
        onPressSend={() => sendEmail()} value={email} onChangeText={(value) => onChangeEmail(value.trim())}
        errorEnabled={emailErrorMsg != ''} errorMsg={emailErrorMsg}
        modalBodyText='Enter your email, you will receive details to retreive your password'
      />
    </ScreenWrapper>
  );
}
