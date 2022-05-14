import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../Modules/GetStarted/Screens/GetStarted';
import Kuran from '../Modules/Kuran/Screens/Kuran';
import KuranDetail from '../Modules/Kuran/Components/KuranDetail';
import TurkceAnlam from '../Modules/Kuran/Screens/TurkceAnlam';
// import MySearch from '../Modules/MySearch/Screens/MySearch';
// import SoundPage from '../Modules/Sound/Screens/SoundPage';

const Stack = createNativeStackNavigator();

export default function MainNavigation({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerTitle: false
            }}>
            {/* <Stack.Screen name='MySearch' component={MySearch} /> */}
            <Stack.Screen name='GetStarted' component={GetStarted} />
            <Stack.Screen name='Kuran' component={Kuran} />
            <Stack.Screen name='KuranDetail' component={KuranDetail}
            />
            <Stack.Screen name='TurkceAnlam' component={TurkceAnlam} />


        </Stack.Navigator>
    )
}