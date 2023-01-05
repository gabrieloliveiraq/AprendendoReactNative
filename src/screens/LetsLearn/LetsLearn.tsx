import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function LetsLearn() {
  const navigation = useNavigation();

  function openJs() {
    navigation.navigate("AboutJs");
  }
  function openReactNative() {
    navigation.navigate("AboutReactNative");
  }
  function openHelpDev() {
    navigation.navigate("HelpDeveloper");
  }

  return (
    <ScrollView
      style={{ backgroundColor: "#f2f2f2", paddingTop: 40, padding: 8 }}
    ></ScrollView>
  );
}
