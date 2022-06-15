import React from "react";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonTextBold,
  SignMessageButtonText,
} from "./styles";
import { Image } from "react-native";
// Components
import SignInput from "../../components/SignInput/SignInput";

// Image
import TeacherLogo from "../../assets/teacher.png";

export default () => {
  return (
    <Container>
      <Image source={TeacherLogo} style={{ width: "100%", height: 350 }} />

      <InputArea>
        <SignInput />

        <SignInput />

        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>
          Don't have an account yet?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Register</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
