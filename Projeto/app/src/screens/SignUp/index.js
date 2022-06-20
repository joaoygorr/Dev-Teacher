import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonTextBold,
  SignMessageButtonText,
} from './styles';
import {Image} from 'react-native';
// Components
import SignInput from '../../components/SignInput/SignInput';

// Image
import TeacherLogo from '../../assets/teacher.png';

// Icons
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

export default () => {
  const navigation = useNavigation();

  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = () => {};

  const handleMessageButtonClick = () => {
    navigation.reset({routes: [{name: 'SignIn'}]});
  };

  return (
    <Container>
      <Image source={TeacherLogo} style={{width: '50%', height: 180}} />

      <InputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Enter your name"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />

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
          <CustomButtonText>Register</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>already have an account?</SignMessageButtonText>
        <SignMessageButtonTextBold>Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
