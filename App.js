import React from 'react';
import { View, Text } from 'react-native';
import { Agenda} from 'react-native-calendars';

const YourComponent = () => {

  
  // Create a new Date object to get the current date
  const currentDate = new Date();

  // Extract day, month, and year from the Date object
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Month is zero-based (0 - 11), so add 1
  const year = currentDate.getFullYear();

  // Format the date as needed (e.g., MM/DD/YYYY)
  const formattedDate = `${month}/${day}/${year}`;

  return (
    
    <View style={{ flex: 1 }}>
      <Agenda
        // Add necessary props for Agenda component
        // For example:
        items={{
          '2023-11-14': [{ name: 'Event 2' }],
          '2023-11-15': [{ name: 'Event 3' }],
          '2023-11-21':[{name : 'Event 4'}],
          '2023-11-22': [{name: 'Event 5', height: 80,}],
        }}

        selected={'2023-11-21'}
        minDate={'2023-11-21'}
        maxDate={'2023-12-5'}
        //pastScrollRange={0}

        renderEmptyDate={() => {
          return <View />;
          <Text style={{ fontSize: 20, color: 'black' }}>Hello, React Native!</Text>
        }}
        
        theme={{

          textDayFontSize: 20,
          agendaDayTextColor: 'red',
          agendaDayNumColor: 'green',
          agendaTodayColor: 'red',
          agendaKnobColor: 'blue'
        }}
        // Agenda container style
        style={{}}
        // Add other props as needed
      />
    </View>

  );
};

export default YourComponent;
