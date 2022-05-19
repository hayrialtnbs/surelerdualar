import React, { Component, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import GlobalStore from '../../Global/Store/index';
import { KuranDetailStyle } from '../Styles';
import LinearGradient from 'react-native-linear-gradient';
import LoadingKuran from '../../Global/Components/LoadingKuran';
import useFetch from '../../Global/Utils/useFetch';
import { API_URL } from '../../Global/Utils/ApiUrls';
import { observer } from 'mobx-react';
import { Divider } from 'react-native-elements';
import Toast from 'react-native-toast-message';



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

    const showToast = (item) => {

        if (item.translation?.footnotes) {
            Toast.show({
                type: 'success', // success, error, info
                text1: `${GlobalStore.surahDetail.name} `,  // Metnin ilk satırı 
                text2: item.translation?.footnotes[0].text

            });
        } else {
            Toast.show({
                type: 'error', // success, error, info
                text1: `${GlobalStore.surahDetail.name}`,  // Metnin ilk satırı 
                text2: "Açıklama Yok"
            });
        }

    }


    return (
        <View style={KuranDetailStyle.container}>

            <LinearGradient style={KuranDetailStyle.LinearContainer} colors={['#FEDB37', '#FDB931', '#9f7928', '#8A6E2F']} >
                <View style={KuranDetailStyle.HeaderContainer}>
                    <Text style={{ fontSize: 25, fontWeight: "bold", fontStyle: "italic", color: "white", fontFamily: 'serif' }}>{GlobalStore.surahDetail.name}</Text>
                </View>
            </LinearGradient>

            <FlatList
                data={GlobalStore.surahDetail?.verses}
                renderItem={({ item, index }) => (
                    <View style={KuranDetailStyle.CardContainer}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", color: "white", fontFamily: 'serif' }}>{index + 1} -  </Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", fontStyle: "italic", color: "white", fontFamily: 'serif', textAlign: "left" }}>{item?.verse}</Text>
                        <Divider
                            color='white'
                            insetType='middle'
                            width={1}
                            style={{ marginTop: 16 }}
                        />

                        <Text style={{ fontSize: 16, fontWeight: "bold", fontStyle: "italic", color: "white", fontFamily: 'serif', marginTop: 10 }}>{item?.transcription}</Text>
                        <Divider
                            color='white'
                            insetType='middle'
                            width={1}
                            style={{ marginTop: 16 }} />

                        <Text style={{ fontSize: 16, fontStyle: "italic", marginTop: 10 }} onPress={() => showToast(item)}>{item?.translation.text}</Text>
                    </View>
                )}
            />
        </View>
    );
};
export default observer(KuranDetail);