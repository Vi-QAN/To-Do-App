import { View, TextInput, StyleSheet, Text } from 'react-native'
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const InputField = (props: any) => {

    return (
        <View style={styles.inputFieldContainer}>
            <MaterialIcons name={props.iconName} style={styles.icon} size={30} />
            {/* <Text style={styles.}>10:00 am</Text> */}
        </View>
    )
}

export default function AddScreen() {
    const [text,onChangeText] = useState('');
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                placeholder='Write task here'
                onChangeText={text => onChangeText(text) }
                multiline={true}
                onPressOut={()=> {}}
            />
            <InputField iconName='alarm' />
            <InputField iconName='notifications-active' />
            <InputField iconName='label' />
            



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',

    },

    inputFieldContainer: {
        flexDirection: 'row',
        margin: 20,
    },

    textInput: {
        width: '100%',
        height: '30%',
        position: 'absolute',
        top: 0,
        backgroundColor: '#eee',
        fontSize: 40,
        paddingHorizontal: 40,
        paddingVertical: 30,
    }, 

    icon: {
        marginRight: 20,
        
    }


}) 