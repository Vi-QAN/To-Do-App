import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dates from './Dates';


const Calendar = (props: any) => {

  return (
    <View 
      style= {styles.container}
      
    >
      <Dates today={props.today} />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    position: 'absolute',
    top: '15%',
    left: 0,
    padding: '6%',
  },
  
})

export default Calendar;

