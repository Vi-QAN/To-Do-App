import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import { Date } from './Date';
import moment from 'moment';

const Dates = (props: {
    dateList: moment.Moment[],
    data: any,
    setData: Function, 
    selectedIndex: number, 
    setSelectedIndex: Function}) => {

  const selectedIndex = props.selectedIndex;
  const [offSet, setOffSet] = useState(0); 

  const dateGenerator = () => {
    // upper limit of dates that data list can hold
    const MAX_DATE = 10
    const numOfDays = 5
    const length = props.data.length;
    const latestItem = props.data[length - 1];
    let i = 1;
    let newDates: any[] = [];
    // only keep maximum 10 days in the list
    while (length <= MAX_DATE && i < numOfDays){
      try {
        newDates.push({
          // convert to moment object then clone
          date: moment(latestItem.date).clone().add(i,'days'),
          taskList: [] 
        })
      } catch(e) {
        console.log('Cannot add more date');
      }
      
      i++;
    }    
    // add generated days into current data
    props.setData((data: any) => [...data, ...newDates]);
  };

  const renderItem = ({item, index}: any) => {
    const selected = index === selectedIndex ? true : false;

    return (
    
      <Date
        index={index}
        dayOfWeek={item.format('dddd').charAt(0)}
        day={item.format('D')}
        onPress={() => {
          props.setSelectedIndex(index)
        }} 
        selected={selected} />
    )
  }
  return (
    <FlatList
      data = {props.dateList}
      renderItem={renderItem}
      style={styles.container}
      horizontal={true}
      extraData = {selectedIndex}
      onEndReachedThreshold = {0.9}
      onScroll={(event) => {
        let currentOffset = event.nativeEvent.contentOffset.x;
        let isRight = currentOffset > offSet ? true : false;
        setOffSet(currentOffset);
        if (isRight){
          try {
            dateGenerator();
          } catch (err) {
            console.log('Cannot add more date', err);
          }
          
        }
  
      }}
    >
      
    </FlatList>
      
  )
}

const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    padding: 0,
    marginBottom: 20,
    borderBottomColor: `#1e90ff`,
    borderBottomWidth: 3.6,
  },
});

export default Dates;