import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View className="flex-1 bg-white px-8 justify-center">
      {/* Ícone do ônibus */}
      <Image
        source={require('../assets/bus.png')}
        style={{ width: 64, height: 64, alignSelf: 'center', marginBottom: 16 }}
        resizeMode="contain"
      />

      <Text className="text-2xl font-bold text-gray-800 mb-2">Entrar</Text>
      <Text className="text-gray-500 mb-6">
        Bem-vindo de volta! Por favor, insira suas credenciais.
      </Text>

      <TextInput
        placeholder="exemplo@seuemail.com"
        placeholderTextColor="#A0AEC0"
        className="border border-gray-300 rounded-lg px-4 py-3 mb-4"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#A0AEC0"
        className="border border-gray-300 rounded-lg px-4 py-3 mb-2"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <View className="flex-row justify-between mb-6">
        <Text className="text-gray-500">Lembrar-me</Text>
        <Text className="text-blue-500 font-semibold">Esqueceu a senha?</Text>
      </View>

      <Pressable className="bg-blue-500 py-3 rounded-lg mb-4">
        <Text className="text-white text-center font-semibold">Entrar</Text>
      </Pressable>

      <Pressable className="border border-gray-300 py-3 rounded-lg flex-row justify-center items-center mb-6">
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
          }}
          style={{ width: 20, height: 20, marginRight: 8 }}
        />
        <Text className="text-gray-700">Entre com Google</Text>
      </Pressable>

      <View className="flex-row justify-center">
        <Text className="text-gray-500">Não possui cadastro? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text className="text-blue-500 font-semibold">Registre</Text>
        </Pressable>
      </View>
    </View>
  );
}
