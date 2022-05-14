import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

const TurkceAnlam = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#063221',
            justifyContent: "center",
            alignItems: "center"
        }} >
            <Text style={{ color: "white" }}>
                TurkceAnlam.js
            </Text>
        </View>
    );
};
export default observer(TurkceAnlam);