import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TextInput, Button, StyleSheet,container} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';

const HomeScreen = () => {
    const navigation = useNavigation();
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');

    const Booking = () => {
        navigation.navigate('Booking');
    }

return(
    <View style={Styles.container}>
        <Button title='Booking' onPress={Booking}/>
    </View>
);
};

export{HomeScreen}