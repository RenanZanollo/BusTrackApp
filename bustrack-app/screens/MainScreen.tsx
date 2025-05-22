import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MainScreen() {
  const navigation = useNavigation();
  const auth = getAuth();
  const [userName, setUserName] = useState('');

  const dataAtual = new Date();
  const diaSemana = format(dataAtual, 'EEEE', { locale: ptBR });
  const dataFormatada = format(dataAtual, "dd 'de' MMMM, yyyy", { locale: ptBR });

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || 'Usuário');
    }
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      {/* Cabeçalho com data e logo */}
      <View className="flex-row justify-between items-center mt-2 mb-6">
        <View>
          <Text className="text-xs text-gray-500">{diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1)}</Text>
          <Text className="text-sm font-semibold text-gray-700">{dataFormatada}</Text>
        </View>
        <Image source={require('../assets/bus.png')} className="w-12 h-12" resizeMode="contain" />
      </View>

      {/* Saudação */}
      <Text className="text-lg text-black mb-2">Bem-vindo, <Text className="font-bold">{userName}</Text>!</Text>

      {/* Título */}
      <Text className="text-2xl font-bold text-black mb-10">O que deseja fazer hoje?</Text>

      {/* Botões */}
      <TouchableOpacity
        onPress={() => navigation.navigate('PesquisaSatisfacao')}
        className="bg-sky-500 p-4 rounded-xl mb-4"
      >
        <Text className="text-white font-semibold text-center">Enviar Opinião</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('MinhasOpinioes')}
        className="p-4 rounded-xl bg-gray-100"
      >
        <Text className="text-center text-sky-600 font-medium">Visualizar minhas opiniões</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
