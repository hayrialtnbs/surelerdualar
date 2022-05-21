import React, { useRef, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    ScrollView,
    Button,
    Animated,
    View,
} from 'react-native';


const BottomSheet = ({ animation, onCancel }) => {
    return (
        <Animated.View style={{
            width: "100%",
            backgroundColor: "white",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 20,
            position: "absolute",
            bottom: animation,
            zIndex: 3,
            alignItems: "center",
            justifyContent: "center",
            maxHeight: 300,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24,

        }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>

                <TouchableOpacity>
                    <View style={{
                        backgroundColor: "red",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 40,
                        marginBottom: 8,
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Menü 3</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    onCancel();
                }}>
                    <View style={{
                        height: 40,
                        marginBottom: 8,
                    }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold",color:"black" }}>Çıkış Yap</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>

        </Animated.View>
    )
}


const Destek = () => {
    const [animationValue, setAnimationValue] = useState(-1000)
    const showAnimation = useRef(new Animated.Value(animationValue)).current


    const toggleAnimation = () => {
        const val = animationValue === 0 ? -1000 : 0
        Animated.timing(showAnimation, {
            useNativeDriver: false,
            toValue: val,
            duration: 350
        }).start()
        setAnimationValue(val)
    }
    return (
        <>
            <View
                onTouchStart={() => {
                    if (animationValue === 0) {
                        toggleAnimation()
                    }
                }}
                style={{ flex: 1, zIndex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button title="Menüyü Aç" onPress={() => {toggleAnimation()}} />
            </View>
            <BottomSheet onCancel={() => {
                toggleAnimation()
            }} animation={showAnimation} />

        </>

    )
}

export default Destek;