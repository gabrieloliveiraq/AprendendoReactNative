import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./drawer.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <MyDrawer></MyDrawer>
    </NavigationContainer>
  );
}
