import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notification({ author, title, body }) {
    return (
        <View>
            <View style={styles.line}></View>
            <Text style={styles.author}>{author}</Text>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.body}>{body}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    line: {
        width: "95%",
        backgroundColor: "black",
        height: 1
    },
    author: {
        color: "#612165",
        left: 10
    },
    outerContainer: {
        backgroundColor: "#082D73",
        padding: 7.5,
        marginBottom: 30
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