import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  FlatList,
} from 'react-native';
import { Date } from './Date';




const Dates = (props: any) => {
  const [selectedId, setSelectedId] = useState(0);
  const [curDate,setCurDate] = useState(props.today);
  const [offSet, setOffSet] = useState(0); 
  const [isScrollLeft, setIsScrollLeft] = useState(false);
  const [data,setData] = useState([
    { dayOfWeek: curDate.format('dddd').charAt(0),
      day: curDate.format('D'),
    }
  ]);
  const dates = [curDate]
  
  const noOfDays = 5;

  const formatDate = (date: any ) => {
    return {
      dayOfWeek: date.format('dddd').charAt(0),
      day: date.format('D'),
    }
  }
  
  const getDay = (props: any) => {
    // calculate the previous/next Days comparing to current Day
    const type = 'days';
    const newDate = props.isAdding ? curDate.clone().add(props.amount,type) : curDate.clone().subtract(props.amount,type);
    dates.push(newDate);
    return formatDate(newDate);
  }

  const getNextDays = () => {
    const nextDays = [];
    for (let i = 0; i <= noOfDays; i++){
      nextDays.push(getDay({amount: i, isAdding: true}));
    }
    const newData = nextDays.concat(nextDays);
    setData(newData);
  }


  const renderItem = ({item, index}: any) => {
    const selected = index === selectedId ? true : false;

    return (
    
      <Date
        index={index}
        dayOfWeek={item.dayOfWeek}
        day={item.day}
        onPress={() => {setSelectedId(index)}} 
        selected={selected} />
    )
  }

  

  return (
    <FlatList
      data = {data}
      renderItem={renderItem}
      style={styles.container}
      horizontal={true}
      extraData = {selectedId}
      onEndReachedThreshold = {0.9}
      onEndReached = {() => {
        const dateLength = dates.length;
        dateLength > 1 ? setCurDate(dates.at(dates.length - 1)) : getNextDays();
        getNextDays();
      }}
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
    height: '100%',
    width: '100%',
    padding: 0,
    margin: 0,
    borderBottomColor: `#1e90ff`,
    borderBottomWidth: 3.6,
  },
});

export default Dates;