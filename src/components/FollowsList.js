import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

// Custom components
import ProfileCard from "../components/ProfileCard";

// CONFIG
import { BASE_URL } from "../config";

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
        const path = `${BASE_URL}/follow/${id}`;
        const res = await fetch(path)
        const userFollows = await res.json();
        setFollows(userFollows);
    }

    return (
        <View>
            <FlatList
                data={follows}
                renderItem={({ item }) => <Item navigation={navigation} user={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}