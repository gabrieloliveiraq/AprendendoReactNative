import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import { HelpDeveloper } from "../screens/HelpDeveloper/HelpDeveloper";
import { LetsLearn } from "../screens/LetsLearn/LetsLearn";

export function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HelpDeveloper} />
      <Tab.Screen name="Settings" component={LetsLearn} />
    </Tab.Navigator>
  );
}
