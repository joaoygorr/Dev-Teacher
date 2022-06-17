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

// Icons
import EmailIcon from "../../assets/Email.js";
import LockIcon from "../../assets/Lock.js";

export default () => {
  return (
    <Container>
      <Image source={TeacherLogo} style={{ width: "50%", height: 180 }} />

      <InputArea>
        <SignInput IconSvg={EmailIcon} placeholder="Enter your email" />

        <SignInput IconSvg={LockIcon} placeholder="Type your password" />

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
