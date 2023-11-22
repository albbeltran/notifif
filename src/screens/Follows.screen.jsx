import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Custom components
import FollowsList from '../components/FollowsList';
import BottomMenu from '../components/BottomMenu';

// Auth Context
import { useAuth } from '../wrappers/auth-context';

export default function Follows({ navigation }) {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Siguiendo</Text>
            <FollowsList navigation={navigation} id={user.id} />

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
    },
        text: {
        color: 'black',
        fontSize: 20,
        marginBottom: 40,
    },
});