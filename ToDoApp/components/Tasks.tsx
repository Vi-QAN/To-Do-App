import { StyleSheet, FlatList } from 'react-native';
import Task from './Task';

// multiple colors to color multiple tasks
const colors = ['#61f4de','#65cbe9', '#68b6ef','#6c8dfa','#6e78ff', '#4c9afa']

const Tasks = (props: any) => {
  // ASSIGN PROPS TO LOCAL VARIABLES

  // 
  const colorLength = colors.length;

  // assign local task list
  const taskList = props.taskList;
  const finishHandler = (id: number) => {
    const newTaskList = taskList.map((item: any) => {
      if (item.id === id){
        item.isFinish = !item.isFinish;
      }
      return item;
    })
    props.setTaskList(newTaskList);
  }
  

  const renderItem = ({item, index}: any) => {
    const color = colors[index % colorLength];
   
    return (
      <Task 
        color={color} 
        id={item.id}
        taskName={item.taskName}
        isCompleted={item.isFinish}
        finishHandler={() => finishHandler(item.id)}
      
      />

    )
  }
  
  return (
    <FlatList 
      data={taskList}
      renderItem={renderItem}
      style={styles.container}
      extraData={colorLength}
      keyExtractor={(item: any) => item.id}
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