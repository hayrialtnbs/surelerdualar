import { StyleSheet } from 'react-native';
import { AppColors } from '../../Global/Utils/AppColors';

const GetStartedStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#063221',
    },
    iconCard: {
        alignItems: "center",
        marginTop: 25,
        flex: 1,
    },
    linear: {
        width: '100%',
        flex: 1,
        borderRadius: 50

    },
    card: {
        flex: 1,
    },

    header: {
        fontSize: 30,
        color: "#8d0057",
        fontFamily: "serif",
    },
    headerText: {
        flexDirection: "row",
    },
    input: {
        marginTop: '20%',
    },
    button: {
        borderWidth: 0.5,
        borderColor: "black",
        backgroundColor: "black",
        borderRadius: 25,
        height: 60,
        width: '70%',
        justifyContent: "center",
        margin: 15,
        alignSelf: "center",
        marginTop: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,

    },
    buttonText: {
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    sifreunuttum: {
        fontSize: 16,
        color: "gray",
        textDecorationLine: "underline"
    },
    textKaydol: {
        fontSize: 18,
        color: "#8d0057",
        fontStyle: 'italic',
        textDecorationLine: "underline"
    }
});

const ButtonStyle = StyleSheet.create({
    container: {
        padding: 8,
        margin: 12,
        backgroundColor: '#2C5364',
        borderRadius: 35,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 21,
        color: 'white',
        height: 55,
        width: 250,
        textAlign: "center",
        padding: 14,
        fontFamily: "serif"

    }
})

export {
    GetStartedStyle,
    ButtonStyle
};
