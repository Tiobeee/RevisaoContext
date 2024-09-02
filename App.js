import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TemaContext, { TemaProvider } from './src/context/TemaContexto';
import HomeScreen from './src/components/HomeScreen';
import TrocaTema from './src/components/TrocaTema';

export default function App() {
  return (
   <TemaProvider>
      <ThemedApp />
    </TemaProvider>
  );
}


function ThemedApp() {
  const { tema } = useContext(TemaContext);

  return (
    <PaperProvider theme={tema}>
      <HomeScreen />
    </PaperProvider>
  );
}

