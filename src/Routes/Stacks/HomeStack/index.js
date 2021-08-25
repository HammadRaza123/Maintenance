import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../../BottomTab';
const Stack = createStackNavigator();

function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="BottomTab" headerMode="none">
            <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Navigator>
    );
}
export default HomeStack;
