import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import MainScreen from './Main';

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator headerMode='none'>
            <Stack.Screen 
                name="MainScreen"
                component={MainScreen}
            />
        </Stack.Navigator>
    )
}
