import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './Component/GlobalVariables';
import { Preloader } from './Component/Preloader';
import { StackNav } from './Navigation/Stack';

export default function App() {
  return (
    <AppProvider>
      <StackNav/>
    </AppProvider>
    
  );
}


