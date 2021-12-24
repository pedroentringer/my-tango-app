import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./screens/login";
import Dashboard from "./screens/dashboard";

const { Navigator, Screen } = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Screen
                name='Login'
                component={Login}
            />
            <Screen
                name='Dashboard'
                component={Dashboard}
            />
        </Navigator>
    </NavigationContainer>
  );
}