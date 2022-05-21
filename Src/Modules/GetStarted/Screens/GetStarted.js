import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Coins from '../../../Assets/Animations/Coins/Coins';
import { GetStartedStyle } from '../Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GetStarted = (props) => {

    return (
        <View style={GetStartedStyle.container}>

            <View style={{ position: "absolute", right: 15, marginTop: 5 }}>
                <Ionicons name="settings" size={30} color="white" onPress={() => props.navigation.navigate('Destek')} />
            </View>

            <StatusBar backgroundColor={"#063221"} barStyle="dark-content" />
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 30, fontWeight: "bold", fontStyle: "italic", color: "white", fontFamily: 'serif' }}>Dua ve Sureler</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", fontStyle: "italic", color: "white", fontFamily: 'serif', textAlign: "center" }}>
                    حَسْبُنَا اللهُ وَنِعْمَ الْوَكِيلُ  نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيرُ
                    غُفْرَانَكَ رَبَّنَا وَاِلَيْكَ ٱلْمَصِيرُ</Text>
            </View>

            <LinearGradient colors={['#FEDB37', '#FDB931', '#9f7928', '#8A6E2F']} style={GetStartedStyle.linear}>
                <View style={GetStartedStyle.card}>
                    <Coins />
                </View>

            </LinearGradient>
            <TouchableOpacity style={GetStartedStyle.button} onPress={() => props.navigation.navigate('Kuran')} >
                <Text style={GetStartedStyle.buttonText} >Oku</Text>
            </TouchableOpacity>

        </View>
    );
};
export default GetStarted;