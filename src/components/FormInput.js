import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function FormInput({ type, placeholder, value, onChange }) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChange}
            {...type === "password" ? { secureTextEntry: true } : {}}
        >
        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        backgroundColor: '#DFDEDF',
        textAlign: 'center',
        padding: 15,
        fontSize: 14,
        color: '#612165',
        borderRadius: 17.5,
    }
});