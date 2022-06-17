import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = () => {};

  const handleMessageButtonClick = () => {
    navigation.reset({ routes: [{ name: "SignUp" }] });
  };

  return (
    <Container>
      <Image source={TeacherLogo} style={{ width: "50%", height: 180 }} />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Enter your email"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Type your password"
          value={passwordField}
          password={true}
          onChangeText={(t) => setPasswordField(t)}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Don't have an account yet?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Register</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
