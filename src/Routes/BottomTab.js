import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image } from 'react-native';
import AddTask from '../screens/MainScreens/AddTask';
import EditTask from '../screens/MainScreens/EditTask';
import Filter from '../screens/MainScreens/Filter';
import FilteredTasks from '../screens/MainScreens/FilteredTasks';
import HavcInfo from '../screens/MainScreens/HavcInfo';
import PaintingInfo from '../screens/MainScreens/PaintingInfo';
import PlumbingInfo from '../screens/MainScreens/PlumbingInfo';
import Setting from '../screens/MainScreens/Setting';
import Stats from '../screens/MainScreens/Stats';
import TaskList from '../screens/MainScreens/TaskList';
import Vendors from '../screens/MainScreens/Vendors';
import Colors from '../utills/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();




function HomeScreen() {
    return (
        <Stack.Navigator initialRouteName="TaskList" headerMode="none"  >
            <Stack.Screen name="TaskList" component={TaskList} />
        </Stack.Navigator>
    );
}

function Navigator() {
    return (
        <Stack.Navigator initialRouteName="UnderDevelopment" headerMode="none">
            <Stack.Screen name="UnderDevelopment" component={UnderDevelopment} />
        </Stack.Navigator>
    );
}
function Account() {
    return (
        <Stack.Navigator initialRouteName="Accounts" headerMode="none">
            <Stack.Screen name="Accounts" component={Accounts} />
            <Stack.Screen name='ChangePassword' component={ChangePassword} />
            <Stack.Screen name='AccountSetting' component={AccountSetting} />
            <Stack.Screen name='AboutUs' component={AboutUs} />
            <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} />
            <Stack.Screen name='LocationSetting' component={LocationSetting} />
            <Stack.Screen name='AddLocation' component={AddLocation} />
        </Stack.Navigator>

    );
}

export default function BottomTab(props) {

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="TaskList"
                tabBarOptions={{
                    activeTintColor: Colors.white,
                    inactiveTintColor: Colors.white60,
                    tabStyle: { backgroundColor: Colors.primaryBlue },
                    labelStyle: { color: Colors.white },
                    keyboardHidesTabBar: true
                }} >
                <Tab.Screen name="TaskList" options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image style={{ tintColor: color }}
                            source={require('../assets/images/tasklist.png')} />
                    )
                }}>
                    {() => <Stack.Navigator headerMode="none">
                        <Stack.Screen name="TaskList" component={TaskList} />
                        <Stack.Screen name="Filter" component={Filter} />
                        <Stack.Screen name="FilteredTasks" component={FilteredTasks} />
                        <Stack.Screen name="AddTask" component={AddTask} />
                        <Stack.Screen name="EditTask" component={EditTask} />
                    </Stack.Navigator>}
                </Tab.Screen>

                <Tab.Screen name="Vendors" options={{
                    tabBarLabel: 'Vendors',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={{ tintColor: color }}
                            source={require('../assets/images/vendors.png')} />
                    )
                }}>
                    {() =>
                        <Stack.Navigator headerMode="none">
                            <Stack.Screen name="Vendors" component={Vendors} />
                            <Stack.Screen name="HavcInfo" component={HavcInfo} />
                            <Stack.Screen name="PlumbingInfo" component={PlumbingInfo} />
                            <Stack.Screen name="PaintingInfo" component={PaintingInfo} />
                        </Stack.Navigator>
                    }
                </Tab.Screen>

                <Tab.Screen name="Stats" options={{
                    tabBarLabel: 'Stats',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={{ tintColor: color }}
                            source={require('../assets/images/stats.png')} />)
                }}>
                    {() => <Stack.Navigator headerMode="none">
                        <Stack.Screen name="Stats" component={Stats} />
                    </Stack.Navigator>
                    }
                </Tab.Screen>
                <Tab.Screen name="Setting" options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={{ tintColor: color }}
                            source={require('../assets/images/settings.png')} />)
                }}>
                    {() => <Stack.Navigator headerMode="none">
                        <Stack.Screen name="Setting" component={Setting} />
                    </Stack.Navigator>
                    }
                </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    );
}