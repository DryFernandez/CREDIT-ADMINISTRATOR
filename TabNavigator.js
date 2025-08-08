import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { MaterialIcons } from "@expo/vector-icons";
import MoneyScreen from "./screens/MoneyScreen";
import InfoScreen from "./screens/InfoScreen";
import ExitScreen from "./screens/ExitScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="settings" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Money"
          component={MoneyScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="attach-money" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="info"
          component={InfoScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="info" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="exit"
          component={ExitScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="exit-to-app" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
