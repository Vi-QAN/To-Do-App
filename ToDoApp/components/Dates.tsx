import React, { PureComponent } from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';
import Date from './Date';
import { Moment } from 'moment';

const Dates = () => {
  return (
    <ScrollView 
      style={styles.container}
      horizontal={true}
      contentContainerStyle={{alignItems: 'center',}}
    >
      <Date month='M' day={12} />
      <Date month='T' day={13} />
      <Date month='M' day={12} />
      <Date month='T' day={13} />
      <Date month='M' day={12} />
      <Date month='T' day={13} />
      <Date month='T' day={13} />
    </ScrollView>
      
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
  },
});

export default Dates;