import { StyleSheet, FlatList, ActionSheetIOS } from 'react-native';
import { useState, useReducer } from 'react';
import Task from './Task';

// multiple colors to color multiple tasks
const colors = ['#61f4de','#65cbe9', '#68b6ef ','#6c8dfa','#6e78ff', '#4c9afa']

// randomly choose color for each task
const generateRandom = () => {
  return Math.floor(Math.random() * ((colors.length)));
}

export const ACTIONS = {
  SET_FINISH: 'setIsFinish',
  SET_NAME: 'setName',
}

const taskReducer = (task: any, action: {type: any, payload: any} ) => {
  switch(action.type){
    case ACTIONS.SET_FINISH:
      return {...task,isFinish: action.payload}
  }
}

const Tasks = (props: any) => {
  // ASSIGN PROPS TO LOCAL VARIABLES
  // assign local task list
  const taskList = props.taskList;
  
  console.log(taskList);

  const [curTask, setCurTask] = useState(0);

  const [task, taskDispatch] = useReducer(taskReducer,taskList[curTask])

  

  const renderItem = ({item,index}: any) => {
    const color = colors[3];
    return (
      <Task 
        id={item.id} 
        name={item.taskName} 
        color={color} 
        isCompleted={item.isFinish} 
        setCurTask={setCurTask}
        taskDispatch={taskDispatch}
        />

    )
  }
  
  return (
    <FlatList 
      data={taskList}
      renderItem={renderItem}
      style={styles.container}
    >
    
    </FlatList>
  )
}



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30,
    height: '80%',
    width: '100%',
    paddingHorizontal: '3%',
    paddingVertical: 0,
    
  }


})

export default Tasks;