// Importações
import { StatusBar } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Telas
import CharactersListScreen from './public/screens/CharactersListScreen.js';
import CharactersDetailScreen from './public/screens/CharacterDetailScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='cls' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='cls' component={CharactersListScreen} />
        <Stack.Screen name='cds' component={CharactersDetailScreen} />
      </Stack.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}
