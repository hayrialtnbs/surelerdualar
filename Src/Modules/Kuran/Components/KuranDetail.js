import React, { Component, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import GlobalStore from '../../Global/Store/index';
import { KuranDetailStyle } from '../Styles';
import LinearGradient from 'react-native-linear-gradient';
import LoadingKuran from '../../Global/Components/LoadingKuran';
import useFetch from '../../Global/Utils/useFetch';
import { API_URL } from '../../Global/Utils/ApiUrls';
import { observer } from 'mobx-react';
import Ionicons from 'react-native-vector-icons/Ionicons';


const KuranDetail = (props) => {
    const { id } = props.route.params;

    useEffect(() => {
        GlobalStore.loadSurahDetail(id);
    }, [])

    const { loading } = useFetch(API_URL);

    if (loading) {
        return (
            <LoadingKuran />
        )
    }

    // const turkceOku = async () => {
    //     props.navigation.navigate('TurkceAnlam')
    // }


    return (
        <View style={KuranDetailStyle.container}>

            <LinearGradient style={KuranDetailStyle.LinearContainer} colors={['#FEDB37', '#FDB931', '#9f7928', '#8A6E2F']} >
                <View style={KuranDetailStyle.HeaderContainer}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", fontStyle: "italic", color: "white", fontFamily: 'serif' }}>{GlobalStore.surahDetail.name}</Text>
                </View>
            </LinearGradient>
            {/* <TouchableOpacity style={{ flexDirection: "row", alignSelf: "center" }} onPress={turkceOku}>
                <Ionicons name='book-outline' size={25} color="white" />
                <Text style={{ fontSize: 20, color: "white", fontWeight: "bold", fontFamily: 'serif', fontStyle: "italic" }}>Türkçe Anlamı Oku</Text>
            </TouchableOpacity > */}
            <FlatList
                data={GlobalStore.surahDetail?.verses}
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
export default observer(KuranDetail);