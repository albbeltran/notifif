import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Custom components
import Notification from "./Notification";

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

export default function NotificationsList({ user }) {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        fetchData();
    });

    async function fetchData() {
        const path = user.role === "alumno" ? `http://192.168.100.8:3000/${user.id}` : `http://192.168.100.8:3000/user/${user.id}/notification`;
        const res = await fetch(path)
        const userFeed = await res.json();
        setFeed(userFeed);
    }

    return (
        <FlatList
            data={feed}
            renderItem={({ item }) => <Item {...user.role === "alumno" ? { author: item.authorName } : null} title={item.title} body={item.body} />}
            keyExtractor={item => item.id}
        />
    );
}