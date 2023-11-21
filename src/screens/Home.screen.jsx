import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import FormInput from '../components/FormInput';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import Notification from '../components/Notification';

export default function Home({ navigation }) {
    const [password, setPassword] = useState();

    return (
        <View>
            <FormInput
                type="password"
                placeholder="Contraseña"
                value={password}
                action={value => setPassword(value)}
            />

            <Button
                text={"Click me"}
                action={() => alert("Good job")}
                background={"#082D73"}
                textColor={"#FFFFFF"}
            />

            <SearchBar />

            <Notification
                title={"¡PROXIMAMENTE POSADA NAVIDEÑA!"}
                body={"Ponte de acuerdo con tu salon y amigos para poder participar en los concursos que hay. Ven y se parte de nuestra posada Troyana con  la comunidad universitaria."}
            />
        </View>
    )
}