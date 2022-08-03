import { StyleSheet, FlatList } from 'react-native';
import { useEffect } from 'react';
import Task from './Task';

// multiple colors to color multiple tasks
const colors = ['#61f4de','#65cbe9', '#68b6ef ','#6c8dfa','#6e78ff', '#4c9afa']

// randomly choose color for each task
const generateRandom = () => {
  return Math.floor(Math.random() * ((colors.length)));
}


const Tasks = (props: any) => {
  // ASSIGN PROPS TO LOCAL VARIABLES
  // assign local task list
  const taskList = props.taskList;

  const renderItem = ({item,index}: any) => {
    const color = colors[0];
    return (
      <Task id={item.id} name={item.taskName} color={color}/>

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