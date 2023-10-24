import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./Login";
import {NavigationContainer} from "@react-navigation/native";
import Router from "../components/Router";
const Stack = createStackNavigator();

function Root() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="Router" component={Router} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;
