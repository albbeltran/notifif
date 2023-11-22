import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Custom components
import ProfileCard from "../components/ProfileCard";

// Auth Context
import { useAuth } from '../wrappers/auth-context';


// Item component
const Item = ({ letter, name }) => (
    <View>
        <ProfileCard
            letter={letter}
            name={name}
            email={"albertcanoiturbe@docentes.uaq.mx"}
        />
    </View>
);

export default function Follows() {
    const { user } = useAuth();

    const [follows, setFollows] = useState([]);

    useEffect(() => {
        fetchData();
    });

    async function fetchData() {
        const path = `http://192.168.100.8:3000/follow/${user.id}`;
        const res = await fetch(path)
        const userFollows = await res.json();
        console.log(userFollows);
        setFollows(userFollows);
    }

    return (
        <FlatList
            data={follows}
            renderItem={({ item }) => <Item letter={item.name[0].toUpperCase()} name={item.name} />}
            keyExtractor={item => item.id}
        />
    );
}