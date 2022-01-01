import React from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;
const FormWrapper = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 80%;
`;

const Form = styled.View`
  height: 400px;
  width: 90%;
  background-color: black;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;
  justify-content: center;
`;

const SubmitForm = styled.TouchableOpacity`
  width: 95%;
  height: 50px;
  border: none;
  padding: 10px;
  border-radius: 15px;
  background-color: #333;
  color: white;
  margin-top: 10px;
`;

const SignInText = styled.Text`
  font-size: 30px;
  color: white;
  margin: 10px;
  text-align: left;
`;

const NewToMbTextWrapper = styled.TouchableOpacity`
  width: 100%;
`;

const NewToMovieBuggy = styled.Text`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: green;
  text-align: center;
`;

const Overlay = styled.View`
  background-color: blue;
  flex: 1;
`;

const Input = styled.TextInput`
  width: 95%;
  height: 50px;
  padding: 10px;
  border-radius: 15px;
  background-color: #333;
  color: green;
  margin-top: 10px;
`;

const Login = () => {
  return (
    <>
      <StatusBar style="light" />

      <Container>
        <ImageBackground
          source={{
            uri: "https://r1.ilikewallpaper.net/iphone-11-wallpapers/download/86645/the-spongebob-movie-sponge-on-the-run-8k-iphone-11-wallpaper-ilikewallpaper_com.jpg",
          }}
          resizeMode="cover"
          style={{ flex: 1, height: Dimensions.get("window").height }}
        >
          <Overlay>
            <FormWrapper>
              <Form>
                <SignInText> Sign In </SignInText>
                <Input
                  placeholder="Enter your email"
                  placeholderTextColor="black"
                />
                <Input
                  placeholder="Enter your password"
                  placeholderTextColor="black"
                  secureTextEntry
                />

                <SubmitForm>Sign In</SubmitForm>
                <NewToMbTextWrapper activeOpacity={0.5}>
                  <NewToMovieBuggy>New To MovieBuggy Sign Up</NewToMovieBuggy>
                </NewToMbTextWrapper>
              </Form>
            </FormWrapper>
          </Overlay>
        </ImageBackground>
      </Container>
    </>
  );
};

export default Login;
