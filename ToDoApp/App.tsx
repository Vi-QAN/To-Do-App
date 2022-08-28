import React, { useRef, useState, useEffect } from 'react';
import { AppState, Text, StyleSheet, SafeAreaView} from 'react-native';
import Calendar from './components/Calendar';
import Header from './components/Header';
import {save, retrieve} from './components/DataHandler';
import moment from 'moment';

import { _Item } from './types';

// use to generate more date when on scroll
const dataGenerator = () => {
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
  const generated = dataGenerator();
  const [data,setData] = useState(generated);

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
        const promise = retrieve();
        if (promise === null){
          alert("no data is fetch")
        } else {
        
          // handle async function
          promise.then((object: any) => {
                    const loaded = object.map((item: _Item) => item);
                    setData(loaded);
                  })
                
                .catch((err) => console.log(err))
                .finally(() => console.log('done'))
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
          console.log(data);
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