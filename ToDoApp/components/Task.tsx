import { View, StyleSheet, Text} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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

const Name = (props: any) => {
    return (
        <Text style={styles.name}>{props.name} </Text>
    )
}

const Task = (props: any) => {
    return (
        <View style={styles.container}>
            <Bullet color={props.color} />
            <Name name={props.name} />
            <BouncyCheckbox 
              style={{
                position: 'absolute',
                right: '1%',
              }}
              size={20}
              fillColor={props.color}
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: props.color }}
              onPress={(isChecked: boolean) => {}}/>
        </View>
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
    
  }



})

export default Task;