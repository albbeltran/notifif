import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import FormInput from '../components/FormInput';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import Notification from '../components/Notification';
import ProfileCard from '../components/ProfileCard';
import ProfilePicture from '../components/ProfilePicture';
import BottomMenu from '../components/BottomMenu';

import { useAuth } from '../wrappers/auth-context';

// Item component
const Item = ({ author, title, body }) => (
    <View>
        <Notification
            author={author}
            title={title}
            body={body}
        />
    </View>
);

export default function Home({ navigation }) {
    const { user } = useAuth();
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        fetchData();
    });

    async function fetchData() {
        const path = user.role === "alumno" ? `http://148.220.213.138:3000/${user.id}` : `http://148.220.213.138:3000/user/${user.id}/notification`;
        const res = await fetch(path)
        const userFeed = await res.json();
        setFeed(userFeed);
    }

    return (
        <View>
            <Text>Bienvenido {user.name}</Text>

            <FlatList
                data={feed}
                renderItem={({ item }) => <Item {...user.role === "alumno" ? { author: item.authorName } : null} title={item.title} body={item.body} />}
                keyExtractor={item => item.id}
            />

            <BottomMenu navigation={navigation} />
        </View>
    )
}