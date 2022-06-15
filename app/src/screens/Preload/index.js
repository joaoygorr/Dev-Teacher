import React, { useEffect } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

// Logo
import TeacherLogo from "../../assets/teacher.png";

export default () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token !== null) {
        // validar o token
      } else {
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Image source={TeacherLogo} style={{ width: "100%", height: 350 }} />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
