import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { IconButton } from '@react-native-material/core'
import { AntDesign } from '@expo/vector-icons';


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

const Task = (props: any) => {
  const isPrioritized = props.isPrioritized;
  const isPressed = props.isPressed
  const color = props.color;
  const firstItem = props.firstItem;
  return (
    <View style={[
        styles.container,
        firstItem ? styles.firstTask : null,
      ]}>
      <TouchableWithoutFeedback
        key={props.id}
        touchSoundDisabled={true}
        delayLongPress={300}
        onLongPress={props.onLongPress}
        onPressIn={props.sizeModeOff}

      >
        <View style={[
          styles.btnContainer,
          isPressed ? {flex: 1} : {flex: 0}]}>
            <Bullet color={color} />
            <Text 
              style={[
                styles.name,
                props.isCompleted ? styles.finished : null, 

                ]}
  
            >{props.taskName} </Text>


            <BouncyCheckbox 
              style={{
                  position: 'absolute',
                  right: '1%',
                }}
              size={20}
              fillColor={color}
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: color }}
              disableBuiltInState={true}// disable auto handle isChecked 
              isChecked={props.isCompleted}
              onPress={props.finishHandler}/>
        </View>
        
      </TouchableWithoutFeedback>
      <View style={styles.sideContainer}>
        <IconButton
          icon={props => isPrioritized ? <AntDesign name="pushpin" size={22} color={color} />  : <AntDesign name="pushpino" size={22} color={color} /> }
          pressEffect='none'
          onPress={props.priorityHandler}
        >
        </IconButton>
        <IconButton
          icon={props => <AntDesign name="delete" size={23} color={'#000'} />}
          pressEffect='android-ripple'
          pressEffectColor={color}
          onPress={props.deleteHandler}
        >
        </IconButton>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%',  
    height: 'auto',
    overflow: 'visible',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
    marginBottom: 5,
  },

  firstTask: {
    paddingBottom: '2%',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },

  btnContainer: {
    height: 'auto',
    width: '100%',
    marginHorizontal: 0,
    paddingVertical: '4%',
    paddingHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },


  sideContainer: {
    width: 'auto',
    flexDirection: 'row',
    margin: 0,
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    width: '70%',
  },
  
  finished: {
    textDecorationLine: 'line-through',
    color: '#000',
  }




})

export default Task;