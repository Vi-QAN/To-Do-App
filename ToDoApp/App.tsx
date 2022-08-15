import React, { useRef, useState, useEffect } from 'react';
import { AppState, View, Text, StyleSheet } from 'react-native';
import Calendar from './components/Calendar';
import Header from './components/Header';
import {save, retrieve} from './components/DataHandler';
import moment from 'moment';

// data object - a 2D array contains
// date - a moment object and corresponding task list for that date
const DATA = [
  {
    date: moment(),
    taskList: []
  },
  {
    date: moment().clone().add(1,'days'),
    taskList: []
  },
  {
    date: moment().clone().add(2,'days'),
    taskList: []
  },
  {
    date: moment().clone().add(3,'days'),
    taskList: []
  },
  {
    date: moment().clone().add(4,'days'),
    taskList: []
  },
  {
    date: moment().clone().add(5,'days'),
    taskList: []
  },
  
]

export default function App() {
  const today = moment();
  let data = [];
  
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // retrieve()
      }

      if ( appState.current.match(/active/) && nextAppState === "background"){
        save(DATA);
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  
  return ( 
    
    <View style={styles.container}>
      <Header today={today}/>
      <Calendar today={today} data={DATA}/>
      <Text>Current state is: {appStateVisible}</Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '6%',
    paddingBottom: '1%',
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