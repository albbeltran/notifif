import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { ROUTES } from '../constants/navigation.constants';

import Login from '../screens/Login.screen';
import Home from '../screens/Home.screen'
import Create from '../screens/Create.screen';
import Profile from '../screens/Profile.screen';
import Follows from '../screens/Follows.screen';

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTES.login} component={Login} />
                <Stack.Screen name={ROUTES.home} component={Home} />
                <Stack.Screen name={ROUTES.create} component={Create} />
                <Stack.Screen name={ROUTES.profile} component={Profile} initialParams={{user: {id: 1,name: "Anon"}}} />
                <Stack.Screen name={ROUTES.follows} component={Follows} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}