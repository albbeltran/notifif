import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Custom components
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import BottomMenu from '../components/BottomMenu';

// ROUTES
import { ROUTES } from "../constants/navigation.constants";
// CONTEXT
import { useAuth } from '../wrappers/auth-context';
// CONFIG
import { BASE_URL } from '../config';

const baseState = () => ({
    title: '',
    body: '',
});

export default function Create({ navigation }) {
    const { user } = useAuth();
    const [form, setForm] = useState(baseState);
    const [error, setError] = useState(null);

    const { title, body } = form;

    useEffect(() => {
        setForm(baseState());
        setError(null);
    }, []);

    const handleChange = ({ value, key }) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        setError(null);
    };

    const Submit = async () => {
        try {
            const res = await fetch(`${BASE_URL}/notification`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    body: body,
                    authorId: user.id
                })
            });

            const newNotification = await res.json();
            console.log(newNotification);
            navigation.navigate(ROUTES.home);
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <FormInput
                type="text"
                placeholder="Título"
                value={title}
                action={(value) => handleChange({ key: 'title', value })}
            />

            <FormInput
                type="text"
                placeholder="Mensaje"
                value={body}
                action={(value) => handleChange({ key: 'body', value })}
            />

            {error && <Text style={{ color: 'red' }}>{error}</Text>}

            <Button
                text={"Enviar"}
                action={Submit}
                background={"#082D73"}
                textColor={"#FFFFFF"}
            />

            <BottomMenu navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});