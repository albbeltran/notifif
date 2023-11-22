import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Custom components
import ProfilePicture from "../components/ProfilePicture";
import Button from "../components/Button";
import BottomMenu from "../components/BottomMenu";
import NotificationsList from '../components/NotificationsList';

// Auth context
import { useAuth } from '../wrappers/auth-context';

export default function Profile() {
    const { user } = useAuth();

    return (
        <View>
            <View>
                <View>
                    <ProfilePicture
                        letter={user.name[0].toUpperCase()}
                    />
                    {
                        user.role === "alumno" ?
                            <Button
                                text="Seguir"
                                action={() => alert("Siguiendo")}
                                background={"#082D73"}
                                textColor={"#FFFFFF"}
                            />
                            :
                            ''
                    }
                </View>
                <Text>{user.name}</Text>
                <Text>alexvagas@gmail.com</Text>
            </View>

            <NotificationsList user={user} />

            <BottomMenu />
        </View>
    );
}