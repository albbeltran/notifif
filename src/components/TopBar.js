import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

// Auth context
import { useAuth } from "../wrappers/auth-context";

export default function TopBar() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{user.name} | {user.id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#D9D9D9',
        marginBottom: 20
    },
    text: {
        fontSize: 18,
        color: "#612165"
    }
})