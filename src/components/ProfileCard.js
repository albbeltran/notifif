import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePicture from "./ProfilePicture";

export default function ProfileCard({ letter, name, email }) {
    return (
        <View style={styles.container}>
            <ProfilePicture letter={letter} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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