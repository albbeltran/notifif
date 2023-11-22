import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Custom components
import BottomMenu from '../components/BottomMenu';
import NotificationsList from '../components/NotificationsList';

// Auth Context
import { useAuth } from '../wrappers/auth-context';


export default function Home({ navigation }) {
    const { user } = useAuth();

    return (
        <View>
            <Text>Bienvenido {user.name}</Text>

            <NotificationsList id={user.id} role={user.role} />

            <BottomMenu navigation={navigation} />
        </View>
    )
}