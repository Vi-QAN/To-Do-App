import React, { useReducer, useState, useEffect} from 'react';
import { StyleSheet, View} from 'react-native';
import Dates from './Dates';
import Tasks from '../components/Tasks';
import Add from '../components/Add';
import moment from 'moment';
import AddScreen from '../screens/AddScreen';



const ACTIONS = {
  ADD_TASK: 'askTask',
  ADD_DATE: 'askDate',
  MODIFY_TASK: 'modifyTask',
}

const TASK_ACTIONS = {
  MODIFY_NAME: 'modifyName',
  MODIFY_FINISH: 'modifyFinish',
  MODIFY_DATE: 'modifyDate',
}

const dataReducer = (state: any, action: {index: number, type: any, subType: any, payload: any }) => {
  switch (action.type){
    case ACTIONS.ADD_TASK: 
      state.map((item: any, index: number) => {
        if (index === action.index ){
          // get task list of chosen date
          let curTaskList = item.taskList;

          // modify task id
          action.payload.task.id = curTaskList.length + 1;

          // add task to the list
          curTaskList.push(action.payload.task);
          
        }
      })
      return state;
    
    case ACTIONS.MODIFY_TASK: 
      switch (action.subType){
        case TASK_ACTIONS.MODIFY_FINISH:

        
      }
      
      
    case ACTIONS.ADD_DATE:
      
      return state;
  }
}

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
  const [data,dataDispatch] = useReducer(dataReducer, props.data);

  // useState for displaying add screen popup
  const [popUp, setPopUp] = useState(false); 

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
  const [taskList,setTaskList] = useState(props.data[0].taskList);
  useEffect(() => {
    // set current task list according to chosen date
    setTaskList(data[selectedIndex].taskList);
  },[selectedIndex,taskList])

  return (
    <View 
      style= {styles.container}
    >
      <Dates today={props.today} data={dateList} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
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

