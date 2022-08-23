import { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Task from './Task';
import { _Task }  from '../types';



// multiple colors to color multiple tasks
const colors = ['#61f4de','#65cbe9', '#68b6ef','#6c8dfa','#6e78ff', '#4c9afa']

const TASK_FIELDS = {
  FINISH: 'FINISH',
  PRIORITY: 'PRIORITY'
}

const Tasks = (props: {taskList: [_Task], setTaskList: Function}) => {
  // ASSIGN PROPS TO LOCAL VARIABLES
  const colorLength = colors.length;

  // assign local task list
  const taskList = props.taskList;

  // detect which button is long pressed
  const [longPressedBtn, setLongPressedBtn] = useState(0);

  // side mode trigger // display pin, and bin button
  const [sideMode, setSideMode] = useState(false);

  // modify task handler
  // using switch case to modify different fields
  const taskModifier = (id: number, payload: {field: String}) => {
    const newTaskList = taskList.map((item: _Task, index: number) => {
      if (item.id === id){
        switch (payload.field){
          case TASK_FIELDS.FINISH:
            item.isFinish = !item.isFinish;
            break;
          case TASK_FIELDS.PRIORITY:
            item.prioritized = !item.prioritized;
            priorityHandler(index, item.prioritized);
            break;
          default:
            break;
        }
        
      }
      return item;
    })
    props.setTaskList(newTaskList);
  }
  
  // delete task handler
  // delete a task in current 
  const deleteTask = (id: number) => {
    const ind = taskList.findIndex((item: _Task) => item.id === id);
   
    props.setTaskList((taskList: [_Task]) => taskList.splice(ind,1));
  }


  const priorityHandler = (index: number, isPrioritized: boolean) => {
    // check if task list length less than 1 
    if (taskList.length <= 1 || index === 0){
      return;
    }

    // otherwise 
    
    // move task to first index of the list using unshift 
    // when task is prioritized
    if (isPrioritized){
      props.setTaskList((taskList: [_Task]) => taskList.unshift(taskList.splice(index,1)[0]));
    }
  }
  

  const renderItem = ({item, index}: any ) => {
    const firstItem = index === 0 ? true : false;
    const color = colors[index % colorLength];
    const isPressed = item.id === longPressedBtn && sideMode;
   
    return (
      <Task 
        color={color} 
        id={item.id}
        taskName={item.taskName}
        isCompleted={item.isFinish}
        isPrioritized={item.prioritized}
        finishHandler={() => taskModifier(item.id, {field: TASK_FIELDS.FINISH})}
        priorityHandler={() => taskModifier(item.id, {field: TASK_FIELDS.PRIORITY})}
        firstItem={firstItem}
        deleteHandler={() => deleteTask(item.id)}
        isPressed={isPressed}
        onLongPress={() => {
          setLongPressedBtn(item.id)
          setSideMode(true)
        }}
        sizeModeOff={() => setSideMode(false)}
      />

    )
  }
  
  return (
    <FlatList 
      data={taskList}
      renderItem={renderItem}
      style={styles.container}
      extraData={[colorLength,longPressedBtn,sideMode]}
      keyExtractor={(item: any, index: number) => item.id}
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
    paddingHorizontal: 0,
    paddingVertical: 0,
    
  }


})

export default Tasks;