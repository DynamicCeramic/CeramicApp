import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TextInput, Button, StyleSheet,container} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const loginData = {
      usernameOrEmail: usernameOrEmail,
      password: password,
    };

    console.log('Login:', loginData);

    navigation.navigate('Main');
  };

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.input}
        placeholder="Username or Email"
        onChangeText={(text) => setUsernameOrEmail(text)}
      />
      <TextInput
        style={Styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export { LoginScreen };