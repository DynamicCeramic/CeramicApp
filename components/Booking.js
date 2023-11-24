import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, TextInput, Button, StyleSheet,container,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles';
import { Agenda } from 'react-native-calendars';

const BookingScreen = () => {
    const navigation = useNavigation();

    const header = '';

  const items = {
    '2023-11-23': [{ name: 'Event 1', additionalInfo: 'Details for Event 1' }],
    '2023-11-24': [{ name: 'Today', additionalInfo: 'Time Slots' }],
    '2023-11-25': [{ name: 'Event 3', additionalInfo: 'Details for Event 3' }],
    '2023-11-26': [{ name: 'Event 4', height: 80, additionalInfo: 'Details for Event 4' }],
  };

  return (
    <><View style={{ flex: 1 }}>

      <View style={{ backgroundColor: 'beige', padding: 10,  }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}></Text>
      </View>

      <Agenda
        items={items}
        selected={'2023-11-24'}
        minDate={'2023-11-20'}
        maxDate={'2023-12-05'}
        renderEmptyDate={() => <View />}
        renderItem={(item) => (
          <View style={{
            borderWidth: 1,
            borderColor: 'black',
            padding: 10,
            marginBottom: 10,
            marginRight: 10,
            marginTop: 30,
            borderRadius: 5,
            backgroundColor: 'beige'
          }}>
            <Text>{item.name}</Text>
            <Text>{item.additionalInfo}</Text>
          </View>

        )}
        theme={{
          agendaDayTextColor: 'black',
          agendaDayNumColor: 'blue',
          agendaTodayColor: 'blue',
          agendaKnobColor: 'blue',
          selectedDotColor:'blue',
          backgroundColor: 'beige',
          selectedDayBackgroundColor: 'blue'
          
        }} />
    </View>

{/* Banner at the bottom */}
      <View style={{ backgroundColor: 'beige', height: 100, borderWidth: 0.25, borderColor: 'black' }}>
        {/* Three evenly spaced boxes */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: '100%' }}>
          <View style={{ width: 75, height: 75, borderWidth: 0.25, borderColor: 'black', borderRadius: 10, }} />
          <View style={{ width: 75, height: 75, borderWidth: 0.25, borderColor: 'black', borderRadius: 10, }} />
          <View style={{ width: 75, height: 75, borderWidth: 0.25, borderColor: 'black', borderRadius: 10, }} />
        </View>
      </View></>
  );
};

export {BookingScreen}