import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useAuth } from '../wrappers/auth-context.js';

import { ROUTES } from '../constants/navigation.constants';

export default function BottomMenu({ navigation }) {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            {user.role === "alumno" ?
                <>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate(ROUTES.home)}
                    >
                        {/* <FontAwesomeIcon icon="square-check" /> */}
                        <Text style={styles.text}>Inicio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate(ROUTES.search)}
                    >
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <Text style={styles.text}>Buscar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate(ROUTES.follows)}
                    >
                        {/* <FontAwesomeIcon icon={faUserGroup} /> */}
                        <Text style={styles.text}>Siguiendo</Text>
                    </TouchableOpacity>
                </>
                :
                <>
                    <TouchableOpacity style={styles.item}
                        onPress={() => navigation.navigate(ROUTES.home)}
                    >
                        {/* <FontAwesomeIcon icon="square-check" /> */}
                        <Text style={styles.text}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}
                        onPress={() => navigation.navigate(ROUTES.create)}
                    >
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <Text style={styles.text}>Crear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}
                        onPress={() => navigation.navigate(ROUTES.profile, {
                            id: user.id,
                            name: user.name,
                            role: user.role
                        })}
                    >
                        {/* <FontAwesomeIcon icon={faUserGroup} /> */}
                        <Text style={styles.text}>Perfil</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100VH',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#23395B'
    },
    item: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});