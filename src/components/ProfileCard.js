import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileCard({ letter, name, email }) {
    return (
        <View style={sytles.container}>
            <View style={sytles.thumb}>
                <Text style={sytles.letter}>{letter}</Text>
            </View>
            <View style={sytles.textContainer}>
                <Text style={sytles.name}>{name}</Text>
                <Text style={sytles.email}>{email}</Text>
            </View>
        </View>
    );
}

const sytles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 15,
        left: 10
    },
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
    textContainer: {
        display: "flex",
        flexDirection: "column"
    },
    name: {
        fontSize: 14,
        color: "#612165"
    },
    email: {
        fontSize: 14,
        color: "#D9D9D9"
    }
})