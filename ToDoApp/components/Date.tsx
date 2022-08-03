import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {Moment} from 'moment';



const Date = (props: any) => {
 
  return (
    <View style={{
      alignItems: 'center',
      width: 'auto',
      height: 'auto',
      padding: 0,
      marginRight: 20,
    }}>
      <Text style={styles.text}>{props.dayOfWeek}</Text>
      <TouchableHighlight
          onPress={props.onPress}
          underlayColor={'#fff'}
         >
          <Text 
            style={[
              {fontWeight: 'bold',fontSize: 20,margin: 0,paddingVertical:10, paddingHorizontal: 11, borderRadius: 80},
              props.selected ? styles.btnActive : styles.btnDeactive,

            ]}
          >
            {props.day}
          </Text>
      </TouchableHighlight>
  </View>
    
  )

  
};

const styles = {
  container: {
    

    
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#b3b3b3',
  },
  btnActive: {
    color: '#FFFFFF',
    backgroundColor:  `#1e90ff`
  },
  btnDeactive: {
    color: '#000',
    backgroundColor: '#fff',
    
  },
};



export { Date };