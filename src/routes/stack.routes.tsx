import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import { AboutJs } from "../screens/AboutJs/AboutJs";
import { AboutReactNative } from "../screens/AboutReactNative/AboutReactNative";
import { HelpDeveloper } from "../screens/HelpDeveloper/HelpDeveloper";
import { LetsLearn } from "../screens/LetsLearn/LetsLearn";

const { Screen, Navigator } = createNativeStackNavigator();

export function MyStack() {
  return (
    <Navigator>
      <Screen
        name="LetsLearn"
        component={LetsLearn}
        options={{
          title: "Vamos Aprender?",
          headerTitleAlign: "center",
          statusBarColor: "#15bbe9",
          navigationBarColor: "#15bbe9",

          headerShown: false,
          headerBackground: () => {
            return (
              <View
                style={{ backgroundColor: "#15bbe9", flex: 1, marginTop: 30 }}
              >
                <Text
                  style={{
                    fontSize: 22,
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 12,
                  }}
                >
                  Vamos Aprender?
                </Text>
              </View>
            );
          },
        }}
      />
      <Screen
        name="AboutJs"
        component={AboutJs}
        options={{
          title: "Vamos falar do JavaScript",
          headerTitleAlign: "center",
          statusBarColor: "#15bbe9",
          navigationBarColor: "#15bbe9",
        }}
      />
      <Screen
        name="AboutReactNative"
        component={AboutReactNative}
        options={{
          title: "Princípios do React-Native",
          headerTitleAlign: "center",
          statusBarColor: "#15bbe9",
          navigationBarColor: "#15bbe9",
        }}
      />
      <Screen
        name="HelpDeveloper"
        component={HelpDeveloper}
        options={{
          title: "Que tal ajudar o Dev",
          headerTitleAlign: "center",
          statusBarColor: "#15bbe9",
          navigationBarColor: "#15bbe9",
        }}
      />
    </Navigator>
  );
}
