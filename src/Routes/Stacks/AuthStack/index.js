import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from '../../../screens/AuthScreens/Login';
const Stack = createStackNavigator();
function AuthStack() {
    return (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}
export default AuthStack;
