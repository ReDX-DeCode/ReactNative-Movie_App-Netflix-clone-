import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import TextInput from "../components/TextInput";
import Spacer from "../components/Spacer";
import TouchableButton from "../components/TouchableButton";

const Request = () => {
  return (
    <View style={styles.inputView}>
      <View style={{ alignItems: "center", paddingVertical: 20 }}></View>
      <TextInput label={"Subject"} />
      <TextInput
        label={"Your Message"}
        multiline={true}
        inputStyle={{ height: 120 }}
      />
      <Spacer height={"20%"} />
      <TouchableButton
        style={{}}
        title={"send"}
        textStyle={{ color: "white" }}
      />
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    paddingTop: 50,
    backgroundColor: "black",
    height: "100%",
  },
});
