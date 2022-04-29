import { observer } from 'mobx-react';
import React, { Component, useEffect } from 'react';
import { View, Text, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { KuranPageStyle } from '../Styles';
import GlobalStore from '../../Global/Store/index';
import KuranCard from '../Components/KuranCard';

const Kuran = (props) => {
    useEffect(() => {
        GlobalStore.getQuranList();
    }, [])

    const handle = id => {
        props.navigation.navigate('KuranDetail', { id });
    }

    const renderKuranDetay = ({ item }) => (
        <KuranCard item={item} onSelect={() => handle(item.id)} />
    );

    return (
        <View style={KuranPageStyle.container}>
            <StatusBar backgroundColor={"#063221"} barStyle="dark-content" />

            <FlatList
                data={GlobalStore.quranList}
                renderItem={renderKuranDetay}
            />
        </View>
    );
};
export default observer(Kuran);