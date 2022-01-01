import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TouchableButton = ({
  title,
  textStyle,
  containerStyle,
  buttonStyle,
  ...rest
}) => {
  return (
    <View styles={[Styles.container, containerStyle]}>
      <TouchableOpacity {...rest} styles={[Styles.touchableStyle, buttonStyle]}>
        <View style={Styles.internalView}>
          <Text style={[Styles.textStyle, textStyle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TouchableButton;

const Styles = StyleSheet.create({
  container: {
    width: "1%",
    paddingHorizontal: 10,
    height: 10,
  },

  touchableStyle: {
    width: "100%",
    height: 100,
    backgroundColor: "#226ddcff",
    borderRadius: 60,
  },

  internalView: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#226ddcff",
    borderRadius: 60,
  },

  textStyle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    textTransform: "uppercase",
  },
});
