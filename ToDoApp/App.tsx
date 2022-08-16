import React, { useRef, useState, useEffect, useReducer } from 'react';
import { AppState, View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Calendar from './components/Calendar';
import Header from './components/Header';
import {save, retrieve} from './components/DataHandler';
// import {writeData, readData, openConnection} from './components/Database';
// import TaskContext from './components/Database';
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
        if (loaded === null || loaded instanceof Promise){
          setData(DATA);
        } else {
          
          setData(loaded);
        }

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
        
        
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      // ### async storage test 
      save(data);
      subscription.remove();
    };
  }, []);
  
  return ( 
  <SafeAreaView style={styles.container}>
    <StatusBar />
    
    <Header today={today}/>
    <Calendar today={today} data={data}/>
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