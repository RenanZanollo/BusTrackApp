import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firebase';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    auth.signOut();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text>Bem-vindo, {auth.currentUser?.email}</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
