import React, { useReducer, useState, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Dates from './Dates';
import Tasks from '../components/Tasks';
import Add from '../components/Add';
import moment from 'moment';

// data object - a 2D array contains
// date - a moment object and corresponding task list for that date
const DATA = [
  {
    date: moment(),
    taskList: [
      {
        taskID: 0,
        taskName: 'Clean the desk',
        isFinish: false,
      },
      {
        taskID: 1,
        taskName: 'Sweep the floor',
        isFinish: false,
      }
    ]
  },
  {
    date: moment().clone().add(1,'days'),
    taskList: [
      {
        taskID: 0,
        taskName: 'Walk the dog',
        isFinish: false,
      },
      {
        taskID: 1,
        taskName: 'Clean the house',
        isFinish: false,
      }
      
    ]
  },
  {
    date: moment().clone().add(2,'days'),
    taskList: []
  },
]


// app logic
// get all the dates that's in data array
const extractDates = (props: any) => {
  let dateList: moment.Moment[] = [];
  props.data.forEach((item: any) => {
    dateList.push(item.date);
  })
  return dateList;
}

// renderer
const Calendar = (props: any) => {
  // useState for data
  const [data,setData] = useState(DATA);

  // useState for date list
  const [dateList,setDateList] = useState(extractDates({data: data}));

  // only setDateList if new date is added in data
  useEffect(() => {
    setDateList(extractDates({data: data}));
  },[data])

  // useState for selected date
  // 
  const [selectedIndex, setSelectedIndex] = useState(0);

  // useState for current task
  const [taskList,setTaskList] = useState(DATA[0].taskList);
  useEffect(() => {
    // set current task list according to chosen date
    setTaskList(data[selectedIndex].taskList);
  },[selectedIndex])
  
  
  // handle addTask button in Add component
  const addTaskHandler = useCallback((props: any) => {
    // make a copy of original data
    let temp = [...props.data];
    
    // add task to task list of selected index (selected date)
    temp[props.selectedIndex].taskList.push(props.newTask);

    // set new data
    setData(temp);
  },[])

  return (
    <View 
      style= {styles.container}
    >
      <Dates today={props.today} data={dateList} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      <Tasks taskList={taskList}/>
      <Add addTaskHandler={addTaskHandler} selectedIndex={selectedIndex} data={data} />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    height: '89%',
    width: '100%',
    position: 'absolute',
    flexDirection: 'column',
    top: '14%',
    left: 0,
    padding: '6%',
    alignItems: 'center',
  },
  
})

export default Calendar;

