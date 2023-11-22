import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

// Custom components
import SearchBar from "../components/SearchBar";
import ProfileCard from "../components/ProfileCard";
import BottomMenu from '../components/BottomMenu';

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
        const path = `${BASE_URL}/user`;
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
        <View style={styles.container}>
            <SearchBar style={styles.bar} query={query} setQuery={setQuery} />

            <FlatList
                data={usersRendered}
                renderItem={({ item }) => <Item navigation={navigation} user={item} />}
                keyExtractor={item => item.id}
                extraData={usersRendered}
            />

            <BottomMenu navigation={navigation} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bar: {
        marginBottom: 20,
        paddingBottom: 20
    }
});