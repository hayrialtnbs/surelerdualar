import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { ButtonStyle } from "../Styles";

const GetButtons = ({ text, onPress, style = ButtonStyle, loading }) => {
    return (
        <TouchableOpacity style={style.container} onPress={onPress} disabled={loading}>
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <Text style={style.title}>{text}</Text>
            )}

        </TouchableOpacity>
    );
};

export default GetButtons;