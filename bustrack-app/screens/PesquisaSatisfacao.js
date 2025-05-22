// screens/PesquisaSatisfacao.js
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PesquisaSatisfacao() {
  const [onibusRating, setOnibusRating] = useState(null);
  const [motoristaRating, setMotoristaRating] = useState(null);
  const [comentario, setComentario] = useState('');
  const [problemas, setProblemas] = useState([]);

  const problemasDisponiveis = [
    'Ar-condicionado quebrado',
    'Banco danificado',
    'Superlotado',
    'Barulho excessivo',
    'Sem acessibilidade',
  ];

  const problemasMotorista = [
    'Direção perigosa',
    'Falta de educação',
    'Uso de celular ao volante',
    'Atraso na rota',
    'Paradas fora do ponto',
  ];

  const toggleProblema = (item) => {
    setProblemas((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const emojis = [
    { label: '😡', value: 1 },
    { label: '😠', value: 2 },
    { label: '😐', value: 3 },
    { label: '😊', value: 4 },
    { label: '😍', value: 5 },
  ];

  const salvarOpiniao = async () => {
    try {
      await addDoc(collection(db, 'opinioes'), {
        linha: selectedLinha,
        avaliacao: selectedRating,
        problemas: selectedProblemas,
        mensagem: mensagem,
        criadoEm: Timestamp.now()
      });

      alert('Opinião enviada com sucesso!');
      navigation.navigate('MainScreen');
    } catch (error) {
      console.error('Erro ao salvar opinião:', error);
      alert('Erro ao enviar opinião.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-4">
      <ScrollView>
        {/* Cabeçalho */}
        <View className="flex-row justify-between items-center mb-4 mt-2">
          <View>
            <Text className="text-gray-600 font-medium text-sm">Segunda-feira</Text>
            <Text className="text-gray-700 text-sm">11 de setembro, 2025</Text>
          </View>
          <Image source={require('../assets/bus.png')} className="h-10 w-10" />
        </View>

        {/* Título */}
        <Text className="text-xl font-semibold mb-2">Avaliação do Ônibus</Text>

        {/* Emojis de avaliação - ônibus */}
        <View className="flex-row justify-around mb-4">
          {emojis.map((emoji) => (
            <TouchableOpacity
              key={`onibus-${emoji.value}`}
              onPress={() => setOnibusRating(emoji.value)}
              className={`p-2 rounded-full ${
                onibusRating === emoji.value ? 'bg-blue-100' : ''
              }`}
            >
              <Text className="text-3xl">{emoji.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-lg font-semibold mb-2">Problemas encontrados no ônibus</Text>
        {problemasDisponiveis.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => toggleProblema(item)}
            className="flex-row items-center mb-2"
          >
            <Ionicons
              name={problemas.includes(item) ? 'checkbox' : 'square-outline'}
              size={24}
              color="dodgerblue"
            />
            <Text className="ml-2">{item}</Text>
          </TouchableOpacity>
        ))}

        <Text className="text-xl font-semibold mt-6 mb-2">Avaliação do Motorista</Text>

        {/* Emojis - motorista */}
        <View className="flex-row justify-around mb-4">
          {emojis.map((emoji) => (
            <TouchableOpacity
              key={`motorista-${emoji.value}`}
              onPress={() => setMotoristaRating(emoji.value)}
              className={`p-2 rounded-full ${
                motoristaRating === emoji.value ? 'bg-blue-100' : ''
              }`}
            >
              <Text className="text-3xl">{emoji.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-lg font-semibold mb-2">Comportamento do motorista</Text>
        {problemasMotorista.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => toggleProblema(item)}
            className="flex-row items-center mb-2"
          >
            <Ionicons
              name={problemas.includes(item) ? 'checkbox' : 'square-outline'}
              size={24}
              color="dodgerblue"
            />
            <Text className="ml-2">{item}</Text>
          </TouchableOpacity>
        ))}

        <Text className="text-lg font-semibold mt-6 mb-2">Comentário adicional</Text>
        <TextInput
          className="border border-gray-300 rounded-md p-3 text-base h-24 text-gray-800"
          multiline
          value={comentario}
          onChangeText={setComentario}
          placeholder="Escreva algo aqui..."
        />

        <TouchableOpacity
          className="bg-sky-500 mt-6 p-4 rounded-xl items-center"
          onPress={() => {
            // integração Firebase entra aqui depois
            salvarOpiniao}  
          }>
          <Text className="text-white font-bold text-base">Enviar Opinião</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

