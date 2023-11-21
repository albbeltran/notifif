import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { ROUTES } from '../constants/navigation.constants';

import Login from '../screens/Login.screen';
import Home from '../screens/Home.screen'


export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTES.login} component={Login} />
                <Stack.Screen name={ROUTES.home} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}