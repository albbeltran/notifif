import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// Custom components
import ProfilePicture from "./ProfilePicture";

// ROUTES
import { ROUTES } from "../constants/navigation.constants";

export default function ProfileCard({ navigation, user, email }) {

    const goToProfile = async () => {
        navigation.navigate(ROUTES.profile, {
            id: user.id,
            name: user.name,
            role: user.role
        })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={goToProfile}
            >
                <ProfilePicture letter={user.name[0].toUpperCase()} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{email}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 10,
        marginTop: 30,
    },
    thumb: {
        display: "flex",
        justifyContent: "center",
        width: 75,
        height: 75,
        backgroundColor: "#D9D9D9",
        borderRadius: 50
    },
    letter: {
        fontSize: 40,
        textAlign: "center",
        color: "#612165",
        margin: 0
    },
    textContainer: {
        display: "flex",
        flexDirection: "column"
    },
    name: {
        fontSize: 14,
        color: "#612165"
    },
    email: {
        fontSize: 14,
        color: "#D9D9D9"
    }
})