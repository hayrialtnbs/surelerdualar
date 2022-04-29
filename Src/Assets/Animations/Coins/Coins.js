import React from "react";
import LottieView from 'lottie-react-native';
function Coins() {
    return <LottieView source={require('../quran.json')} autoPlay={true}
        style={{ justifyContent: "center", alignItems: "center", }} />;
}
export default Coins;