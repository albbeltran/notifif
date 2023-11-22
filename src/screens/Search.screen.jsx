import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

// Custom components
import SearchBar from "../components/SearchBar";
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


export default function Search({ navigation }) {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [usersRendered, setUsersRendered] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        filter();
    }, [query])

    async function fetchData() {
        const path = `http://192.168.100.8:3000/user`;
        const res = await fetch(path)
        let allUsers = await res.json();
        allUsers = allUsers.filter(user => user.role === "administrativo");
        setUsers(allUsers);
        setUsersRendered(allUsers);
    }

    function filter() {
        const usersFilter = users.filter(user => user.name.includes(query));
        setUsersRendered(usersFilter);
    };

    return (
        <View>
            <SearchBar query={query} setQuery={setQuery} />

            <FlatList
                data={usersRendered}
                renderItem={({ item }) => <Item navigation={navigation} user={item} />}
                keyExtractor={item => item.id}
                extraData={usersRendered}
            />
        </View>

    );
}