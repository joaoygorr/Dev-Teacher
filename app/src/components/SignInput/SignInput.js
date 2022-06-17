import React from "react";
//components
import { InputArea, Input } from "./SignInput.style";

export default ({ IconSvg, placeholder }) => {
  return (
    <InputArea>
      <IconSvg />
      <Input placeholder={placeholder} placeholderTextColor="#268596" />
    </InputArea>
  );
};
