import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { LetsLearn } from "../screens/LetsLearn";
import { AboutJs } from "../screens/AboutJs";
import { AboutReactNative } from "../screens/AboutReactNative";
import { HelpDeveloper } from "../screens/HelpDeveloper";

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="O que vamos aprender?"
          component={LetsLearn}
          options={{
            drawerActiveTintColor: "#7641FA",
            drawerActiveBackgroundColor: "#F2F2F2",
            drawerType: "slide",
            drawerIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="Sobre o Java Script"
          component={AboutJs}
          options={{
            drawerActiveTintColor: "#7641FA",
            drawerActiveBackgroundColor: "#F2F2F2",
            drawerType: "slide",
            drawerIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="Sobre o React Native"
          component={AboutReactNative}
          options={{
            drawerActiveTintColor: "#7641FA",
            drawerActiveBackgroundColor: "#F2F2F2",
            drawerType: "slide",
            drawerIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />

        <Drawer.Screen
          name="Ajude o Desenvolvedor aqui"
          component={HelpDeveloper}
          options={{
            drawerActiveTintColor: "#7641FA",
            drawerActiveBackgroundColor: "#F2F2F2",
            drawerType: "slide",
            drawerIcon: () => <Ionicons name="home" size={24} color="black" />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
