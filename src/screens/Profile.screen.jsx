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

export default function Profile({ route, navigation }) {
    const { name, role, id } = route.params;
    const { user } = useAuth();

    const [isFollowing, setFollowing] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const res = await fetch(`http://192.168.100.8:3000/user/${user.id}/follow/${id}`);
        const resFollowing = await res.json();
        setFollowing(resFollowing);
    }

    async function changeFollow() {
        if(isFollowing) {
            alert("Dejaste de seguir")
        }
        else alert("Siguiendo")
    }

    return (
        <View>
            <View>
                <View>
                    <ProfilePicture
                        letter={name[0].toUpperCase()}
                    />
                    {
                        user.role === "alumno" ?
                            <Button
                                text={isFollowing ? "Siguiendo" : "Seguir"}
                                action={changeFollow}
                                background={isFollowing ? "#082D73" : "#D9D9D9"}
                                textColor={isFollowing ? "#FFFFFF" : "#612165"}
                            />
                            :
                            ''
                    }
                </View>
                <Text>{name}</Text>
                <Text>alexvagas@gmail.com</Text>
            </View>

            <NotificationsList id={id} role={role} />

            <BottomMenu navigation={navigation} />
        </View>
    );
}