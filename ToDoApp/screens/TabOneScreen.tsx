import { StyleSheet } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Header from '../components/Header';
import Calendar from '../components/Calendar';

import moment  from 'moment';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const today = moment();
  return ( 
    <View style={styles.container}>
      <Header today={today}/>
      <Calendar today={today}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 0,
    margin: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
