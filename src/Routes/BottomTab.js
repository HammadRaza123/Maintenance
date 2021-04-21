import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, FlatList, View, Text, StatusBar, SafeAreaView, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../utills/Colors';
import { width, height, totalSize } from 'react-native-dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import TaskList from '../screens/TaskList/index';
import Vendors from '../screens/Vendors/index';
import Assets from '../screens/Assets/index';
import Stats from '../screens/Stats/index';
import Setting from '../screens/Setting/index';
import FilterTask from '../screens/FilterTask/index';
import AddTask from '../screens/AddTask';
import HavcInfo from '../screens/HavcInfo';
import PlumbingInfo from '../screens/PlumbingInfo';
import PaintingInfo from '../screens/PaintingInfo';
import EditTask from '../screens/EditTask';
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
                }} >
                <Tab.Screen name="TaskList" options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image style={{ tintColor: color }}
                            source={require('../assets/images/tasklist.png')} />
                    )
                }}>
                    {() => <Stack.Navigator headerMode="none">
                        <Stack.Screen name="TaskList" component={TaskList} />
                        <Stack.Screen name="FilterTask" component={FilterTask} />
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

                <Tab.Screen name="Assets" options={{
                    tabBarLabel: 'Assets',
                    tabBarIcon: ({ color, size }) => (
                        <Image style={{ tintColor: color }}
                            source={require('../assets/images/assets.png')} />
                    )
                }}>
                    {() => <Stack.Navigator headerMode="none">
                        <Stack.Screen name="Assets" component={Assets} />
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