import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {Moment} from 'moment';

const Date = (props: any) => {
  return (
    <View style={{
      paddingRight: 30,
      alignItems: 'center',
    }}>
      <Text style={styles.text}>{props.month}</Text>
      <TouchableOpacity 
          
         >
          <Text 
            style={[
              styles.btn,
              {fontWeight: 'bold'}
            ]}
          >
            {props.day}
          </Text>
      </TouchableOpacity>
    </View>
    
  )

  
}

const styles = {
  container: {
    
    
  },
  containerActive: {
    borderBottomColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    color: '#b3b3b3',
  },
  background: {
    backgroundColor: '#eee',
  },
  btn: {
    color: '#000',
    fontSize: 20,
  },
  btnActive: {
    color: '#FFFFFF',
  },
};



export default Date;