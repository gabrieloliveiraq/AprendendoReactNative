import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export function HtmlCssJs() {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
        }}
      >
        <Text style={{ marginLeft: 60, fontSize: 14, fontWeight: "600" }}>
          HTML
        </Text>
        <Text style={{ marginLeft: 70, fontSize: 14, fontWeight: "600" }}>
          CSS
        </Text>
        <Text style={{ marginLeft: 85, fontSize: 14, fontWeight: "600" }}>
          JS
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginVertical: -7,
        }}
      >
        <FontAwesome5
          name="html5"
          size={70}
          color="#e44a24"
          style={{ marginLeft: 55 }}
        />
        <FontAwesome5
          name="css3-alt"
          size={70}
          color="#006eba"
          style={{ marginLeft: 50 }}
        />
        <FontAwesome5
          name="js-square"
          size={70}
          color="#efd81d"
          style={{ marginLeft: 50 }}
        />
      </View>
    </>
  );
}
