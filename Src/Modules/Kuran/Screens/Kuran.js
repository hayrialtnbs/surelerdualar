import { observer } from 'mobx-react';
import React, { Component, useEffect } from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { KuranPageStyle } from '../Styles';
import GlobalStore from '../../Global/Store/index';
import KuranCard from '../Components/KuranCard';
import LoadingKuran from '../../Global/Components/LoadingKuran';
import useFetch from '../../Global/Utils/useFetch';
import { API_URL } from '../../Global/Utils/ApiUrls';
import MySearch from '../../MySearch/Screens/MySearch';

const Kuran = (props) => {
    const { loading } = useFetch(API_URL);

    useEffect(() => {
        GlobalStore.getQuranList();
    }, []);

    const handle = async (id) => {
        props.navigation.navigate('KuranDetail', { id });
    }

    if (loading) {
        return (
            <LoadingKuran />
        )
    }

    const renderKuranDetay = ({ item }) => (
        <KuranCard item={item} onSelect={() => handle(item.id)} />
    );


    return (
        <View style={KuranPageStyle.container}>
            <StatusBar backgroundColor={"#063221"} barStyle="dark-content" />
            {/* <MySearch /> */}
            <FlatList
                data={GlobalStore.quranList}
                renderItem={renderKuranDetay}
            />
        </View>
    );
};
export default observer(Kuran);