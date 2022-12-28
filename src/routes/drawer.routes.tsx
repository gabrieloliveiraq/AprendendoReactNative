import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";

import { LetsLearn } from "../screens/LetsLearn";
import { AboutJs } from "../screens/AboutJs";
import { AboutReactNative } from "../screens/AboutReactNative";
import { HelpDeveloper } from "../screens/HelpDeveloper";
import { MyStack } from "./stack.routes";
import { MaterialIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#7641FA",
        drawerActiveBackgroundColor: "#F2F2F2",
        drawerType: "slide",
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="O que vamos aprender?"
        component={MyStack}
        options={{
          drawerIcon: () => <Ionicons name="home" size={22} color="#7641FA" />,
        }}
      />
      <Drawer.Screen
        name="Sobre o Java Script"
        component={AboutJs}
        options={{
          drawerIcon: () => (
            <FontAwesome5 name="js" size={22} color="#efd81d" />
          ),
        }}
      />
      <Drawer.Screen
        name="Sobre o React Native"
        component={AboutReactNative}
        options={{
          drawerIcon: () => (
            <FontAwesome5 name="react" size={24} color="#61dafb" />
          ),
        }}
      />

      <Drawer.Screen
        name="Ajude o Desenvolvedor"
        component={HelpDeveloper}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="developer-mode" size={24} color="#222222" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
