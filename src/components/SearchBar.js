import React, { useState } from "react";
import { StyleSheet } from "react-native";
import FormInput from "./FormInput";

export default function SearchBar({ query, setQuery }) {
    return (
        <FormInput
            type="text"
            placeholder="Buscar"
            value={query}
            action={value => setQuery(value)
            }
        />
    );
}