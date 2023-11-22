import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

// Custom components
import ProfileCard from "../components/ProfileCard";

// Item component
const Item = ({ navigation, user }) => (
    <View>
        <ProfileCard
            navigation={navigation}
            user={user}
            email={"albertcanoiturbe@docentes.uaq.mx"}
        />
    </View>
);

export default function FollowsList({ navigation, id }) {
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
            renderItem={({ item }) => <Item navigation={navigation} user={item} />}
            keyExtractor={item => item.id}
        />
    );
}