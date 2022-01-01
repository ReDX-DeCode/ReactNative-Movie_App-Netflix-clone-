import React from "react";
import { Label } from "native-base";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Card } from "react-native-elements";

const Input = ({
  inputContainer,
  inputStyle,
  name,
  label,
  onsubmit,
  labelTwo,
  labelOne,
  containerStyle,
  ...rest
}) => {
  return (
    <View style={[Styles.container, containerStyle]}>
      {Label ? (
        <Text style={[Styles.LabelStyle, LabelStyle]}> {label} </Text>
      ) : labelOne && labelTwo ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[Styles.LabelStyle, labelStyle]}>{labelOne}</Text>
          <TouchableOpacity onPress={onsubmit}>
            <Text
              style={[Styles.LabelStyle, { color: "blue", fontSize: 12 }]}
            ></Text>
          </TouchableOpacity>
        </View>
      ) : null}

      <Card style={(Styles.inputContainer, inputContainer)}>
        <TextInput
          {...rest}
          style={[Styles.inputStyle, inputStyle]}
          name={name}
        />
      </Card>
    </View>
  );
};

export default Input;

const Styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    margin: 0,
    padding: 0,
  },

  inputStyle: {
    height: 45,
    paddingHorizontal: 17,
  },

  container: {
    width: "100%",
    paddingHorizontal: 15,
  },
  LabelStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
  },
});
