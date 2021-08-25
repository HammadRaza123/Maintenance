import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import ScreenWrapper from '../../../components/ScreenWrapper';
import { InputField } from '../../../components/InputField';
import { login } from '../../../Redux/Actions/Auth';
import styles from './styles';
import Appcolor from '../../../utills/Colors'
import logo from '../../../assets/images/logo.png'
export default function Dashboard(props) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  return (
    <ScreenWrapper statusBarColor={Appcolor.transparent}>
      <View style={styles.mainViewContainer}>
        <Image source={logo} style={styles.logo} />
        <InputField placeholder={'Enter user name'} />
        <InputField placeholder={'Enter password'} />
        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}> Forgot Password</Text>
        </TouchableOpacity>
        <Button
          title="Login"
          onPress={() => dispatch(login({ userName: 'John Doe' }))}
        />
      </View>
    </ScreenWrapper>
  );
}
