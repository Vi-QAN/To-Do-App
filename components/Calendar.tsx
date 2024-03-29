import React, { useState, useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import Dates from './Dates';
import Tasks from '../components/Tasks';
import Add from '../components/Add';
import moment from 'moment';
import AddScreen from '../screens/AddScreen';

// app logic
// get all the dates that's in data array
const extractDates = (props: any) => {
  let dateList: moment.Moment[] = [];
  props.data.forEach((item: any) => {
    dateList.push(moment(item.date));
  })
  return dateList;
}


// renderer
const Calendar = (props: any) => {
  // useState for displaying add screen popup
  const [popUp, setPopUp] = useState(false); 

  // useState for date list
  const [dateList,setDateList] = useState(extractDates({data: props.data}));

  // only setDateList if new date is added in data
  useEffect(() => {
    // dateGenerator();
    setDateList(extractDates({data: props.data}));
  },[props.data])

  // useState for selected date
  const [selectedIndex, setSelectedIndex] = useState(0);

  // useState for current task
  const [taskList,setTaskList] = useState(props.data[0].taskList);
  useEffect(() => {
    // set current task list according to chosen date
    setTaskList(props.data[selectedIndex].taskList);
  },[selectedIndex,taskList])


  return (
    <View 
      style= {styles.container}
    >
      <Dates 
        dateList={dateList} 
        selectedIndex={selectedIndex} 
        setSelectedIndex={setSelectedIndex} 
        setData={props.setData}
        data={props.data}
      />
      <Tasks taskList={taskList} setTaskList={setTaskList}/>
      <AddScreen popUp={popUp} setPopUp={setPopUp} setTaskList={setTaskList} taskList={taskList}/>
      <Add setPopUp={setPopUp}/>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    height: '89%',
    width: '100%',
    flexDirection: 'column',
    top: 0,
    left: 0,
    padding: '6%',
    alignItems: 'center',
  },
  
})

export default Calendar;

