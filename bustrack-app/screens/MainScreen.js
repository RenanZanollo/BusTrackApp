import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';

export default function MainScreen() {
  const navigation = useNavigation();

  // Obter data formatada
  const data = new Date();
  const formato = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const dataFormatada = formato.format(data);

  return (
    <View className="flex-1 bg-white px-6 pt-16">
      {/* Cabeçalho */}
      <View className="flex-row justify-between items-start mb-10">
        <View>
          <Text className="text-xs text-gray-500">{
            // Primeira letra maiúscula
            dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)
          }</Text>
        </View>
        <Image
          source={require('../assets/buslogo.png')}
          className="w-10 h-10"
          resizeMode="contain"
        />
      </View>

      {/* Título */}
      <Text className="text-2xl font-semibold text-black mb-10">
        O que deseja fazer hoje?
      </Text>

      {/* Botão Enviar Opinião */}
      <Pressable
        className="bg-sky-500 py-4 rounded-xl items-center mb-4"
        onPress={() => navigation.navigate('PesquisaSatisfacao')}
      >
        <Text className="text-white font-semibold text-base">Enviar Opinião</Text>
      </Pressable>

      {/* Link para Visualizar opiniões */}
      <Pressable onPress={() => console.log('Visualizar opiniões')}>
        <Text className="text-indigo-500 font-medium text-base text-center">
          Visualizar minhas opiniões
        </Text>
      </Pressable>
    </View>
  );
}
