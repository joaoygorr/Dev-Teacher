import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image} from 'react-native';
import {UserContext} from '../../contexts/UserContext';

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import Api from '../../Api';

import SignInput from '../../components/SignInput/SignInput';

import TeacherLogo from '../../assets/teacher.png';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if (emailField != '' && passwordField != '') {
      let json = await Api.signIn(emailField, passwordField);

      if (json.token) {
        await AsyncStorage.setItem('token', json.token);

        userDispatch({
          type: 'setAvatar',
          payload: {
            avatar: json.data.avatar,
          },
        });

        navigation.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        alert('Wrong email and/or password!');
      }
    } else {
      alert('Fill in the fields!');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <Image source={TeacherLogo} style={{width: '50%', height: 250}} />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Type your e-mail"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Type your password"
          value={passwordField}
          onChangeText={t => setPasswordField(t)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Already have an account?</SignMessageButtonText>
        <SignMessageButtonTextBold>Register</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
