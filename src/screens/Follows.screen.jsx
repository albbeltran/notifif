import { StatusBar } from 'expo-status-bar';
import React from "react";

// Custom components
import FollowsList from '../components/FollowsList';

// Auth Context
import { useAuth } from '../wrappers/auth-context';

export default function Follows() {
    const { user } = useAuth();

    return (
        <FollowsList id={user.id} />
    );
}