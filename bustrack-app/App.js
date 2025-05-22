import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import MinhasOpinioes from './screens/MinhasOpinioes'; // ainda vamos criar
import PesquisaSatisfacao from './screens/PesquisaSatisfacao';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PesquisaSatisfacao"
          component={PesquisaSatisfacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MinhasOpinioes"
          component={MinhasOpinioes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
