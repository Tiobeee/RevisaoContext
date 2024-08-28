import { Button, DefaultTheme, Surface, Switch, Text } from "react-native-paper";
import styles from "../config/styles";
import TemaContext from "../context/TemaContexto";
import { useContext } from "react";

export default function TrocaTema() {
  const { tema, alterarTema } = useContext(TemaContext);
  const isDefaultTheme = tema === DefaultTheme;
  return (
    <Surface style={styles.container}>
      <Text>Toggle theme</Text>
      <Switch value={tema} onValueChange={alterarTema}></Switch>
    </Surface>
  );
}