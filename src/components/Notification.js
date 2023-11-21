import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notification({ title, body }) {
    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.body}>{body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        backgroundColor: "#082D73",
        padding: 10,
        margin: 10
    },
    innerContainer: {
        backgroundColor: "#D9D9D9",
        color: "#000000",
        padding: 3,
        borderRadius: 5
    },
    title: {
        fontSize: 16,
        textAlign: "left"
    },
    body: {
        fontSize: 14,
        textAlign: "left"
    }
})