import { Text } from "react-native";

export default function TxtComponent({Texto, styleTexto}) {
  return <Text style={styleTexto} >{Texto}</Text>;
}