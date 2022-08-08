import { View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useReducer } from 'react';
import {ACTIONS} from './Tasks';

const Bullet = (props: any) => {
  return (
    <View 
      style={{
        width: 14,
        height: 14,
        backgroundColor: props.color,
        borderRadius: 50,
        marginRight: 20,
        padding: 0,

      }}>

    </View>
    
  )
}

// const CheckBox = () => {
//   return (
//     <Checkbox /> 
//   )
// }


const Task = (props: any) => {

  return (
    <TouchableWithoutFeedback
      key={props.id}
      touchSoundDisabled={true}
      
    >
      <View style={styles.container}>
          <Bullet color={props.color} />
          <Text style={
            props.isCompleted ? 
            styles.finished 
            : 
            styles.name
          }>{props.name} </Text>
          <BouncyCheckbox 
            style={{
                position: 'absolute',
                right: '1%',
              }}
            size={20}
            fillColor={props.color}
            unfillColor="#FFFFFF"
            iconStyle={{ borderColor: props.color }}
            onPress={() => {
              props.setCurTask(props.id);
              props.taskDispatch({type: ACTIONS.SET_FINISH, payload: true})
            }}/>
      </View>
    </TouchableWithoutFeedback>
  )
}


const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    marginBottom: '6%',
    paddingVertical: '5%',
    paddingHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 16,
    fontWeight: '600'
  },
  firstTask: {
    
  },

  finished: {
    textDecorationLine: 'line-through',
    color: '#eee',
  }



})

export default Task;