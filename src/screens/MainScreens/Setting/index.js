import React from 'react';
import { SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import { logout } from '../../../Redux/Actions/Auth';
import styles from './styles';
export default function Setting() {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.mainViewContainer}>
      <Header title={'Setting'} hideActionIcon />
      <Button title='logout' onPress={() => dispatch(logout())} />
    </SafeAreaView>
  );
}