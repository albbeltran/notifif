import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import FormInput from '../components/FormInput';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import Notification from '../components/Notification';
import ProfileCard from '../components/ProfileCard';
import ProfilePicture from '../components/ProfilePicture';

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
    }, []);

    async function fetchData() {
        const res = await fetch(`http://192.168.100.8:3005/${user.id}`)
        const userFeed = await res.json();
        setFeed(userFeed);
    }

    return (
        <View>
            <Text>Bienvenido {user.name}</Text>

            <FlatList
                data={feed}
                renderItem={({ item }) => <Item author={item.authorName} title={item.title} body={item.body} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}