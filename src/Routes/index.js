import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './Stacks/AuthStack';
import HomeStack from './Stacks/HomeStack';
import React from 'react';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();
export default function Routes() {
  const isLogin = useSelector(state => state.Auth.isLogin)
  return (
    <NavigationContainer>
      {!isLogin ? (<AuthStack />
      ) : (
        <HomeStack />
      )}
    </NavigationContainer>
  );
}

