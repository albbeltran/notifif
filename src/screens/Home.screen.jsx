import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Custom components
import BottomMenu from '../components/BottomMenu';
import NotificationsList from '../components/NotificationsList';
import TopBar from '../components/TopBar';

// Auth Context
import { useAuth } from '../wrappers/auth-context';


export default function Home({ navigation }) {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            {/* <TopBar /> */}

            <NotificationsList style={styles.notifications} id={user.id} role={user.role} />

            <BottomMenu navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notifications: {
        marginTop: 10,
        width: '100%'
    }
});