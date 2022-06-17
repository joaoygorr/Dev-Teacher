import React from "react";
//components
import { InputArea, Input } from "./SignInput.style";

export default ({ IconSvg, placeholder, value, onChangeText, password }) => {
  return (
    <InputArea>
      <IconSvg />
      <Input
        secureTextEntry={password}
        placeholder={placeholder}
        placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
      />
    </InputArea>
  );
};
