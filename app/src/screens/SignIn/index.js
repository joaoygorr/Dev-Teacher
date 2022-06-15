import React from "react";
import { Text } from "react-native";
import {
  Container,
  InputArea,
  SignInput,
  CustomButton,
  CustomButtonText,
} from "./styles";
import { Image } from "react-native";

// Image
import TeacherLogo from "../../assets/teacher.png";

export default () => {
  return (
    <Container>
      <Image source={TeacherLogo} style={{ width: "100%", height: 350 }} />
    </Container>
  );
};
