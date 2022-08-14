import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
} from 'react-native';
import { Date } from './Date';

const Dates = (props: any) => {
  const selectedIndex = props.selectedIndex;
  const [offSet, setOffSet] = useState(0); 
  const [isScrollLeft, setIsScrollLeft] = useState(false);
  const data = props.data;

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
      data = {data}
      renderItem={renderItem}
      style={styles.container}
      horizontal={true}
      extraData = {selectedIndex}
      onEndReachedThreshold = {0.9}
      // onEndReached = {() => {
      //   const dateLength = dates.length;
      //   dateLength > 1 ? setCurDate(dates.at(dates.length - 1)) : getNextDays();
      //   getNextDays();
      // }}
      onScroll={(event) => {
        let currentOffset = event.nativeEvent.contentOffset.x;
        let isLeft = currentOffset > offSet ? false : true;
        setOffSet(currentOffset);
        setIsScrollLeft(isLeft);
  
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