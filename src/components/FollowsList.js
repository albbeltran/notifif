import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

// Custom components
import ProfileCard from "../components/ProfileCard";

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

export default function FollowsList({ id }) {
    const [follows, setFollows] = useState([]);

    useEffect(() => {
        fetchData();
    });

    async function fetchData() {
        const path = `http://192.168.100.8:3000/follow/${id}`;
        const res = await fetch(path)
        const userFollows = await res.json();
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