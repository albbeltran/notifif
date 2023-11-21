import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
                        <Text>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <Text>Buscar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        {/* <FontAwesomeIcon icon={faUserGroup} /> */}
                        <Text>Sub</Text>
                    </TouchableOpacity>
                </>
                :
                <>
                    <TouchableOpacity style={styles.item}
                        onPress={() => navigation.navigate(ROUTES.home)}
                    >
                        {/* <FontAwesomeIcon icon="square-check" /> */}
                        <Text>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}
                        onPress={() => navigation.navigate(ROUTES.create)}
                    >
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <Text>Crear</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}
                        // onPress={() => navigation.navigate(ROUTES.profile)}
                    >
                        {/* <FontAwesomeIcon icon={faUserGroup} /> */}
                        <Text>Perfil</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    item: {
        alignItems: 'center',
    },
};