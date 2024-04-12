import { TextInput } from "react-native";

export default function TxtInputComponent({ txtplace, changeText, value, styleInput }) {
  return (
    <TextInput placeholder={txtplace} value={value} onChangeText={changeText} style={styleInput}/>
  );
}