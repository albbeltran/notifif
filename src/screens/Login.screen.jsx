import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const baseState = () => ({
    id: '',
    password: '',
});

export default function Login() {
    const [form, setForm] = useState(baseState());
    const [valid, setValid] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = ({ key, value }) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        setError(null);
    };

    const signIn = async () => {
        console.log('SI')
        try {
            await fetch('http://127.0.0.1:3000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: form.id
            });

            if (user) {
                setForm(baseState());
                // navigation.navigate(ROUTES.flashcards);
                setError(null);
            } else {
                setError("SignIn failed: User not authenticated"); // Pending
            }
        } catch (err) {
            console.log(err)
        }
    }

    const { id, password } = form;

    return (
        <View style={styles.container}>
            <View style={styles.container_login}>
                <Text style={styles.title}>Inicia sesión</Text>

                <TextInput
                    style={styles.input}
                    placeholder='Expediente'
                    value={id}
                    onChangeText={(value) => handleChange({ key: 'id', value })}
                >
                </TextInput>

                <TextInput
                    style={styles.input}
                    placeholder='NIP'
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(value) => handleChange({ key: 'password', value })}
                >
                </TextInput>

                {error && <Text style={{ color: 'red' }}>{error}</Text>}

                <TouchableOpacity
                    style={styles.btn}
                    onPress={signIn}
                >
                    <Text style={{ fontSize: 18, color: 'white' }}>Iniciar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container_login: {
      display: 'flex',
      rowGap: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%',
      backgroundColor: '#F3F3F2',
      padding: 20,
      borderRadius: 10
    },
    title: {
      marginBottom: 3,
      fontSize: 28,
      textAlign: 'center',
      color: '#612165'
    },
    input: {
      width: '90%',
      backgroundColor: '#DFDEDF',
      textAlign: 'center',
      padding: 15,
      fontSize: 14,
      color: '#612165',
      borderRadius: 17.5,
    },
    btn: {
      marginTop: 5,
      backgroundColor: '#082D73',
      width: '90%',
      height: 55,
      padding: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 17.5,
    }
  });
  