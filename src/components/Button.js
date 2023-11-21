import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Button({ text, action, background, textColor }) {
    return (
        <TouchableOpacity
            style={styles({ background }).btn}
            onPress={action}
        >
            <Text style={{ color: textColor }}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = ({ background }) => StyleSheet.create({
    btn: {
        marginTop: 5,
        backgroundColor: background,
        width: '90%',
        height: 55,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17.5,
    }
});