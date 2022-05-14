import React from 'react';
import LottieView from 'lottie-react-native';
import { AppColors } from '../Utils/AppColors';

function LoadingKuran() {
    return <LottieView source={require('../../../Assets/Animations/loadingkuran.json')} autoPlay style={{ flex: 1, backgroundColor:AppColors.loadingBackground }} />
};
export default LoadingKuran;