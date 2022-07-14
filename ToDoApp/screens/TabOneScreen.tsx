import { StyleSheet } from 'react-native';
import { useState } from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import Tasks from '../components/Tasks';
import Add from '../components/Add';
import moment  from 'moment';



export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const today = moment();
  return ( 
    <View style={styles.container}>
      <Header today={today}/>
      <Calendar today={today}/>
      <Tasks />
      <Add />
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
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
