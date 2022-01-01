import React from "react";
import { View } from "react-native";
import { color } from "react-native-reanimated";

const Spacer = ({ width, height, color }) => {
  return (
    <View
      style={{
        width: width ? width : "100%",
        height: height ? height : 15,
        backgroundColor: color,
      }}
    />
  );
};

export default Spacer;
