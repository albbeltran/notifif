import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import FormInput from '../components/FormInput';


export default function Home({ navigation }) {
    const [password, setPassword] = useState();

    return (
        <View>
            <FormInput
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={value => setPassword(value)}
            />
        </View>
    )
}