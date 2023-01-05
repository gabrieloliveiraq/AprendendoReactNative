import { NavigationContainer } from "@react-navigation/native";
import { MyTab } from "./tab.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <MyTab></MyTab>
    </NavigationContainer>
  );
}
