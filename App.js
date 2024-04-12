import { View, TouchableOpacity } from "react-native";
import { styles } from "./src/Styles/StyleSheet";

// importando os componentes
import TxtInputComponent from "./src/Components/TxtInputComponent";
import TxtComponent from "./src/Components/TxtComponent";

// importando Hook useState
import React, { useState } from "react";

export default function App() {
  const [temperatura, setTemperatura] = useState("");
  const [conta, setConta] = useState("");

  const calcTemp = () => {
    if (temperatura != "") {
      const conta = (temperatura * 9) / 5 + 32;
      const resultado = "Sua temperatura em Fahrenheit é " + conta;
      setConta(resultado);
    } else {
      alert("Valor indefinido");
    }
  };
  const calcularNovamente = () => {
    setTemperatura("");
    setConta("");
  };

  return (
    <View style={styles.container}>
      <TxtComponent Texto="Calcular temperatura" styleTexto={styles.textii}/>
      <TxtInputComponent
        txtplace="Digite sua temperatura em Celsius"
        value={temperatura}
        changeText={setTemperatura}
        styleInput={styles.caixa}
      />

      <TouchableOpacity onPress={calcTemp} style={styles.botao}>
        <TxtComponent Texto="Calcular" />
      </TouchableOpacity>
      <TouchableOpacity onPress={calcularNovamente} style={styles.botao}>
        <TxtComponent Texto="Calcular novamente" styleTexto={styles.textoo} />
      </TouchableOpacity>
      <TxtComponent Texto={conta} styleTexto={styles.textii} />
    </View>
  );
}
