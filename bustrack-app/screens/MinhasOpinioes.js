// screens/LoginScreen.js
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/bus.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>
        Bem vindo de volta! Por favor, insira suas credenciais.
      </Text>

      <TextInput
        placeholder="exemplo@seuemail.com"
        placeholderTextColor="#A3B3C2"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#A3B3C2"
        style={[styles.input, { marginBottom: 16 }]}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.row}>
        <Text style={styles.remember}>Lembrar-me</Text>
        <Pressable>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </Pressable>
      </View>

      <Pressable style={styles.buttonPrimary}>
        <Text style={styles.buttonPrimaryText}>Entrar</Text>
      </Pressable>

      <Pressable style={styles.buttonOutline}>
        <Image
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png',
          }}
          style={styles.googleIcon}
        />
        <Text style={styles.buttonOutlineText}>Entre com Google</Text>
      </Pressable>

      <View style={styles.rowCenter}>
        <Text style={styles.registerText}>Não possui cadastro? </Text>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Registre</Text>
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
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#E0E5ED',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1A2A4A',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  remember: {
    fontSize: 14,
    color: '#4A6FA5',
  },
  forgot: {
    fontSize: 14,
    color: '#00AEEF',
    fontWeight: '600',
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
    marginBottom: 24,
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
