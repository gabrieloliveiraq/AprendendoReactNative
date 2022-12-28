import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
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
    <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
      <TouchableOpacity style={styles.js} onPress={openJs}>
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500" }}>
          O Java Script
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.reactNative} onPress={openReactNative}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "500",
            color: "#61dafb",
          }}
        >
          O React Native
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.helpDev} onPress={openHelpDev}>
        <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "500" }}>
          Ajude o Dev
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  js: {
    backgroundColor: "#efd81d",
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 12,
    marginTop: 30,
  },
  reactNative: {
    backgroundColor: "#222222",
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 12,
    marginTop: 30,
  },
  helpDev: {
    backgroundColor: "#7641FA",
    marginHorizontal: 50,
    padding: 10,
    borderRadius: 12,
    marginTop: 30,
  },
});
