import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import FormInput from '../components/FormInput';
import Button from '../components/Button';

// ROUTES
import { ROUTES } from "../constants/navigation.constants";
// CONTEXT
import { useAuth } from '../wrappers/auth-context';

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
            const res = await fetch('http://192.168.100.8:3000/notification', {
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
        <View>
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
        </View>
    );
}