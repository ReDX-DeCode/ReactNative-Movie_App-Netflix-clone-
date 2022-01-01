import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Splash = ({ navigation }) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("BottomStack");
      } else {
        navigation.replace("Login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Container />
    </>
  );
};

export default Splash;
