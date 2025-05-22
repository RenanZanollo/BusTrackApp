// screens/RegisterScreen.js
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleRegister = async () => {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      navigation.navigate('MainScreen');
    } catch (error) {
      Alert.alert('Erro ao registrar', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bus.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Registro</Text>
      <Text style={styles.subtitle}>
        Por favor, preencha seus dados para criar sua conta.
      </Text>

      <Text style={styles.label}>Nome*</Text>
      <TextInput
        placeholder="Insira seu nome"
        placeholderTextColor="#CBD5E0"
        style={[styles.input, { marginBottom: 16 }]}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Email*</Text>
      <TextInput
        placeholder="Insira seu email"
        placeholderTextColor="#CBD5E0"
        style={[styles.input, { marginBottom: 16 }]}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha*</Text>
      <TextInput
        placeholder="Crie uma senha"
        placeholderTextColor="#CBD5E0"
        style={[styles.input, { marginBottom: 4 }]}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <Text style={styles.passwordHelper}>
        Deve ter ao menos 6 caracteres.
      </Text>

      <Pressable style={styles.buttonPrimary} onPress={handleRegister}>
        <Text style={styles.buttonPrimaryText}>Criar conta</Text>
      </Pressable>

      <Pressable style={styles.buttonOutline}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.buttonOutlineText}>Registre com Google</Text>
      </Pressable>

      <View style={styles.rowCenter}>
        <Text style={styles.registerText}>Já possui uma conta? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.registerLink}>Entrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  logo: {
    width: 64,
    height: 64,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A2A4A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#4A6FA5',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: '#4A6FA5',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E5ED',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1A2A4A',
  },
  passwordHelper: {
    fontSize: 12,
    color: '#4A6FA5',
    marginBottom: 24,
  },
  buttonPrimary: {
    width: '100%',
    backgroundColor: '#00AEEF',
    borderRadius: 8,
    paddingVertical: 14,
    marginBottom: 24,
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonOutline: {
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E0E5ED',
    borderRadius: 8,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  buttonOutlineText: {
    fontSize: 16,
    color: '#1A2A4A',
    fontWeight: '500',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#4A6FA5',
  },
  registerLink: {
    fontSize: 14,
    color: '#00AEEF',
    fontWeight: '600',
  },
});
