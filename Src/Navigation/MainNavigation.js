import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../Modules/GetStarted/Screens/GetStarted';
import Kuran from '../Modules/Kuran/Screens/Kuran';
import KuranDetail from '../Modules/Kuran/Components/KuranDetail';

const Stack = createNativeStackNavigator();

export default function MainNavigation({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: false
            }}>
            <Stack.Screen name='GetStarted' component={GetStarted} />
            <Stack.Screen name='Kuran' component={Kuran} />
            <Stack.Screen name='KuranDetail' component={KuranDetail}
            />
        </Stack.Navigator>
    )
}