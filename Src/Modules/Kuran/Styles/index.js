import { StyleSheet } from 'react-native';
import { AppColors } from '../../Global/Utils/AppColors';

const KuranPageStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#063221',
    },

});

const KuranCardStyle = StyleSheet.create({
    CardContainer: {
        flex: 1,
        borderRadius: 50,
        height: 60,
        width: "90%",
        padding: 15,
        margin: 15,
    },
    card: {
        flex: 1,
        alignItems:"center"
    }
})

const KuranDetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#063221',
    },
    CardContainer: {
        flex: 1,
        margin: 15
    },
    HeaderContainer: {
        alignItems:"center",
        flex:1
    },
    LinearContainer:{
        borderRadius: 50,
        height: 65,
        width: "90%",
        padding: 15,
        margin: 15
    }
})



export {
    KuranPageStyle,
    KuranCardStyle,
    KuranDetailStyle
};
