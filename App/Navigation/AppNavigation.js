/* This file contains the app's navigation!! */

import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

/* Home */
import { Map } from '../Screens/Home';

const HomeStack = createStackNavigator();
function HomeStackComponent() {
    return (
        <HomeStack.Navigator headerMode="float">
            <HomeStack.Screen name="Map" component={Map} />
        </HomeStack.Navigator>
    );
}

/* Transactions */
import { TransactionsOverview, SchedulePickup, Confirm, PickupScheduled, Messenger } from '../Screens/Transactions';

const TransactionsStack = createStackNavigator();
function TransactionsStackComponent() {
    return (
        <TransactionsStack.Navigator headerMode="float">
            <TransactionsStack.Screen name="Transactions" component={TransactionsOverview} />
            <TransactionsStack.Screen name="Schedule Pickup" component={SchedulePickup} />
            <TransactionsStack.Screen name="Confirm Pickup Time" component={Confirm} />
            <TransactionsStack.Screen name="Messenger" component={Messenger} />
            <TransactionsStack.Screen name="Pickup Scheduled" component={PickupScheduled} options={{ headerLeft: null, title: 'Transactions' }}/>
        </TransactionsStack.Navigator>
    );
}

/* Closet */
import { ClosetOverview, ItemView, AddItem, ConfirmCredits} from '../Screens/Closet';

const ClosetStack = createStackNavigator();
function ClosetStackComponent() {
    return (
        <ClosetStack.Navigator headerMode="float">
            <ClosetStack.Screen name="My Closet" component={ClosetOverview} />
            <ClosetStack.Screen name="Item View" component={ItemView} />
            <ClosetStack.Screen name="Add Item" component={AddItem} />
              <ClosetStack.Screen name="Confirm Credits" component={ConfirmCredits} />
        </ClosetStack.Navigator>
    );
}

const TabNav = createBottomTabNavigator();
function TabNavComponent() {
    return (
        <TabNav.Navigator
        initialRouteName="Actions"
        screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Feed') {
                        iconName = focused ? 'list-circle' : 'list-circle-outline';
                    } else if (route.name == 'Actions') {
                        iconName = focused ? 'leaf' : 'leaf-outline';
                    } else if (route.name == 'Dashboard') {
                        iconName = focused ? 'podium' : 'podium-outline';
                    } else if (route.name == 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }
            return <Ionicons style={{ marginTop: 3 }} name={iconName} size={35} color='#4d4d4d' />;
                },
            })}

        tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: '#4d4d4d'
        }}>
            <TabNav.Screen name="Home" component={HomeStackComponent} />
            <TabNav.Screen name="Transactions" component={TransactionsStackComponent} />
            <TabNav.Screen name="My Closet" component={ClosetStackComponent} />
        </TabNav.Navigator>
    );
}

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};

export default function AppNavigation() {
    return (
        <NavigationContainer theme={MyTheme}>
            <TabNavComponent />
        </NavigationContainer>
    );
}
