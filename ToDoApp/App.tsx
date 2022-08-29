import React, { useRef, useState, useEffect } from 'react';
import { AppState, StyleSheet, SafeAreaView} from 'react-native';
import Calendar from './components/Calendar';
import Header from './components/Header';
import {save, retrieve} from './components/DataHandler';
import moment from 'moment';

import { _Item } from './types';

// use to generate intial state of apps for initial use
const dataGenerator = () => {
  let i = 0;
  const data = []
  // initialize 6 days in advance
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
  // get today date
  const today = moment();

  // generate initial state
  const generated = dataGenerator();

  // create reference object to keep updates of data states
  // used when data need to be saved on moving to background mode
  const dataState = useRef(generated);

  // keep update current state of data
  const [data,setData] = useState(dataState.current);

  // create reference object to keep updates of app states
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  // update reference object
  useEffect(() => {
    dataState.current = data;
  },[data])

  useEffect(() => {
    const subscription = AppState.addEventListener("change",nextAppState => {
      // when changing state from background to foreground
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        // load data from local storage (using async storage)
        // ### async storage test
        const promise = retrieve();
        if (promise === null){
          alert("no data is fetch")
        } else {
        
          // handle loaded data from async storage
          promise.then((object: any) => {
                    // filter data that from today only
                    // remove older data
                    const loaded = object.filter((item: _Item) => moment(item.date).from(today));
                    console.log(loaded);
                    // set loaded data
                    setData(loaded);
                  })
                .catch((err) => console.log(err))
                .finally(() => console.log('done'))
        }
      }
      
      // when changing state from running in foreground to background
      if ( appState.current.match(/active/) && 
          nextAppState === "background"){
          // save latest data to async storage 
          // using referece object
          save(dataState.current)
        
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);

     
    });

    return () => {
      // remove event listener
      // ### async storage test 
      subscription.remove();
    };
  }, []);
  
  return ( 
  <SafeAreaView style={styles.container}>
    <Header today={today}/>
    <Calendar today={today} data={data} setData={setData}/>
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