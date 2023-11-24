// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {LoginScreen} from './components/login'
import {RegistrationScreen} from './components/register'

const Stack = createStackNavigator();

const MainScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <Button
        title="RegisterButton"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="LoginButton"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        {/* <Stack.Screen name="Timeslots" component={Timeslots} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;