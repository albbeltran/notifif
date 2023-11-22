import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Notification({ author, title, body }) {
    return (
        <View>
            <View style={styles.line}></View>
            {author ? <Text style={styles.author}>{author}</Text> : ''}
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
        width: "100%",
        backgroundColor: "#8A8D91",
        height: 1,
        marginBottom: 5
    },
    author: {
        color: "#612165",
        left: 20,
        marginBottom: 10
    },
    outerContainer: {
        backgroundColor: "#23395B",
        padding: 7.5,
        marginBottom: 10,
        borderRadius: 5
    },
    innerContainer: {
        backgroundColor: "#FCFCFF",
        color: "#000000",
        paddingLeft: 90,
        paddingRight: 90,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        width: '100%'
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