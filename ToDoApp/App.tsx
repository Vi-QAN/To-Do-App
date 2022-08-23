import React, { useRef, useState, useEffect } from 'react';
import { AppState, View, Text, StyleSheet, SafeAreaView} from 'react-native';
import Calendar from './components/Calendar';
import Header from './components/Header';
import {save, retrieve} from './components/DataHandler';
// import {writeData, readData, openConnection} from './components/Database';
// import TaskContext from './components/Database';
import moment from 'moment';

import { _Item } from './types';
import { ListItem } from '@react-native-material/core';


// data object - a 2D array contains
// date - a moment object and corresponding task list for that date
const DATA = [
  {
    date: moment(),
    taskList: []
  }
]

// use to generate more date when on scroll
const dataGenerator = async () => {
  let i = 0;
  const data = []
  // only keep maximum 10 days in the list
  while (i < 6){
    data.push(
      {
        date: moment().clone().add(i,'days'),
        taskList: [] 
      }
    )
    i++;
  }
  return data;
  
}

export default function App() {
  
  // useReducer for data
  const [data,setData] = useState(DATA);

  const today = moment();
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    
    const subscription = AppState.addEventListener("change",async nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // ### async storage test
        const loaded = retrieve();
        if (loaded === null){
          const generated = dataGenerator();
          // setData(generated);
        } else {
          // handle async function
          loaded.then((loaded) => loaded.filter()).then()
          
        }
        
        // console.log(data);
        // ### realm database test
        // const connection = openConnection();
        // try {
        //   const data = readData({realm: connection});
        // } catch (e) {
        //   console.log(e);
        // }
        }
      

      if ( appState.current.match(/active/) && 
          nextAppState === "background"){
          save(data)
        
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);

     
    });

    return () => {
      // ### async storage test 
      
      subscription.remove();
    };
  }, []);
  
  return ( 
  <SafeAreaView style={styles.container}>
    <Header today={today}/>
    <Calendar today={today} data={data} setData={setData}/>
    {/* <Text style={{position: 'absolute'}}>Current state is: {appStateVisible}</Text> */}
    <Text style={{position: 'absolute'}}>{}</Text>
  </SafeAreaView>
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