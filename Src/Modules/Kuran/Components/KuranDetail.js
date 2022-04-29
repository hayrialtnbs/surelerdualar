import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import GlobalStore from '../../Global/Store/index';
import { KuranDetailStyle } from '../Styles';
import LinearGradient from 'react-native-linear-gradient';

const KuranDetail = (props) => {
    const { id } = props.route.params;
    useEffect(() => {
        GlobalStore.loadSurahDetail(id);
    }, [])

    return (
        <View style={KuranDetailStyle.container}>

            <LinearGradient style={KuranDetailStyle.LinearContainer} colors={['#FEDB37', '#FDB931', '#9f7928', '#8A6E2F']} >
                <View style={KuranDetailStyle.HeaderContainer}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", fontStyle: "italic", color: "white", fontFamily: 'serif' }}>{GlobalStore.surahDetail.name}</Text>
                </View>
            </LinearGradient>

            <FlatList
                data={GlobalStore.surahDetail.verses}
                renderItem={({ item, index }) => (
                    <View style={KuranDetailStyle.CardContainer}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white", fontFamily: 'serif' }}>{index + 1} - </Text>
                        {/* <Text>{item.translation.text}</Text> */}
                        <Text style={{ fontSize: 18, fontWeight: "bold", fontStyle: "italic", color: "white", fontFamily: 'serif' }}>{item?.transcription}</Text>
                    </View>
                )}
            />
        </View>
    );
};
export default KuranDetail;