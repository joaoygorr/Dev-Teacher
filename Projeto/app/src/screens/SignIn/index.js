import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../contexts/UserContext';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonTextBold,
  SignMessageButtonText,
} from './styles';
import {Image, ToastAndroid} from 'react-native';
// API
import Api from '../../Api.js';

// Components
import SignInput from '../../components/SignInput/SignInput';

// Image
import TeacherLogo from '../../assets/teacher.png';

// Icons
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
        alert('Incorrect email and/or password');
      }
    } else {
      alert('Fill in all fields');
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({routes: [{name: 'SignUp'}]});
  };

  return (
    <Container>
      <Image source={TeacherLogo} style={{width: '50%', height: 180}} />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Enter your email"
          value={emailField}
          onChangeText={t => setEmailField(t)}
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Type your password"
          value={passwordField}
          password={true}
          onChangeText={t => setPasswordField(t)}
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
