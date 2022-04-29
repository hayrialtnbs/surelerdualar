import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import { KuranCardStyle } from '../Styles';

const KuranCard = ({ item, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect} >

            <LinearGradient style={KuranCardStyle.CardContainer} colors={['#FEDB37', '#FDB931', '#9f7928', '#8A6E2F']} >
                <View style={KuranCardStyle.card}>
                    {/* <Entypo name='open-book' size={25} color="white" /> */}
                    <Text style={{ color: "white", justifyContent: "center", textAlign: "center" }}>
                        {item.id} - {item.name}
                    </Text>
                </View>

            </LinearGradient>
        </TouchableOpacity>
    );
};
export default KuranCard;