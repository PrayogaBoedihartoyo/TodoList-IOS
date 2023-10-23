import Home from "../pages/home";
import {Ionicons} from "@expo/vector-icons";
import Chat from "../pages/Chat";
import SettingsScreen from "../pages/Settings";
import Profile from "../pages/Profile";
import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Chat"
                    component={Chat}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="chatbox-ellipses" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="person-circle-outline" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Router;
