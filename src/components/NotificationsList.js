import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Custom components
import Notification from "./Notification";

// CONFIG
import { BASE_URL } from "../config";

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

export default function NotificationsList({ id, role }) {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    setTimeout(fetchData, 3000);

    async function fetchData() {
        const path = role === "alumno" ? `${BASE_URL}/${id}` : `${BASE_URL}/${id}/notification`;
        const res = await fetch(path);
        const userFeed = await res.json();
        setFeed(userFeed);
    }

    return (
        <FlatList
            data={feed}
            renderItem={({ item }) => <Item {...role === "alumno" ? { author: item.authorName } : null} title={item.title} body={item.body} />}
            keyExtractor={item => item.id}
            extraData={feed}
        />
    );
}