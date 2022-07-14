import { StyleSheet, View, FlatList} from 'react-native';
import { useState } from 'react';
import Task from './Task';

const addTask = () => {

}


const Tasks = () => {
  const colors = ['#61f4de','#65cbe9', '#68b6ef ','#6c8dfa','#6e78ff', '#4c9afa']
  const [isRefreshing, setIsRefreshing] = useState(false);
  const tasks = [
    {
      id: 0,
      name: 'Clean the desk',
    },
    {
      id: 1,
      name: 'Sweep the floor',
    },
    {
      id: 2,
      name: 'Walking the dog',
    },
    {
      id: 3,
      name: 'Clean the house',
    },
    {
      id: 4,
      name: 'Clean the house',
    }
  ]

  const generateRandom = () => {
    return Math.floor(Math.random() * ((colors.length)));
  }
  

  const renderItem = ({item}: any) => {
    const color = colors[generateRandom()];
    
    return (
      <Task id={item.id} name={item.name} color={color}/>

    )
  }
  
  return (
    
    <FlatList 
      data={tasks}
      renderItem={renderItem}

      style={styles.container}
      refreshing
      
      
    >
      
      
    
    </FlatList>
  )
}



const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '40%',
    height: '50%',
    width: '100%',
    paddingHorizontal: '6%',
    paddingVertical: 0,
    
  }


})

export default Tasks;