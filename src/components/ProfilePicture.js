import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfilePicture({ letter }) {
    return (
        <View style={styles.thumb}>
            <Text style={styles.letter}>{letter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    thumb: {
        display: "flex",
        justifyContent: "center",
        width: 75,
        height: 75,
        backgroundColor: "#D9D9D9",
        borderRadius: 50
    },
    letter: {
        fontSize: 40,
        textAlign: "center",
        color: "#612165",
        margin: 0
    },
})