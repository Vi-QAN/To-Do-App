import { View, TextInput, StyleSheet, Text, Modal, TouchableHighlight, KeyboardAvoidingView,
TouchableWithoutFeedback, 
Keyboard,
Platform} from 'react-native'
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

const InputField = (props: any) => {

    return (
        <View style={styles.fieldContainer}>
            <MaterialIcons name={props.iconName} style={styles.icon} size={30} />
            {/* <Text style={styles.}>10:00 am</Text> */}
        </View>
    )
}

export default function AddScreen(props: any) {
    const [text,setText] = useState('');
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.popUp}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalView}>
                        <TouchableHighlight 
                            activeOpacity={0.6} 
                            underlayColor={'#FFF'} 
                            onPress={() => props.setPopUp(false)} 
                        >
                            <View style={styles.closeBtn}>
                                <Text style={{fontSize: 20}}>X</Text>
                            </View>
                        </TouchableHighlight>
                        <TextInput 
                            style={styles.textInput}
                            placeholder='Write task here'
                            onChangeText={text => setText(text) }
                            multiline={false}
                            onPressOut={()=> {Keyboard.dismiss}}
                        />
                        <InputField iconName='alarm' />
                        <InputField iconName='notifications-active' />
                        <InputField iconName='label' />

                        <TouchableHighlight 
                            activeOpacity={0.6} 
                            underlayColor={'#FFF'} 
                            onPress={() => {
                                let newTask = {
                                    id: props.taskList.length + 1,
                                    taskName: text,
                                    isFinish: false,
                                }
                                setText('');
                                // add new task to current task list
                                props.setTaskList((taskList: any) => taskList.push(newTask));

                                // close popup screen
                                props.setPopUp(false);
                            }} 
                            >
                            <View style={styles.addBtn}>
                                <Text style={{
                                    fontSize: 20, 
                                    color: '#fff',
                                    fontWeight: '600'}}>Add</Text>
                            </View>
                        </TouchableHighlight>



                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1

    },

    modalView: {
        fontSize: 20,
        backgroundColor: '#fff',
        color: '#000',
        width: '100%',
        height: '100%',
        justifyContent: 'space-evenly'
    },

    fieldContainer: {
        flexDirection: 'row',
        margin: 20,
    },

    textInput: {
        width: '100%',
        height: 140,
        fontSize: 40,
        paddingHorizontal: 30,
    }, 

    closeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: 60,
        height: 60,
    },

    icon: {
        marginRight: 20,
        
    },

    addBtn: {
        alignItems: 'center',
        backgroundColor: '#1e90ff',
        paddingVertical: 10,
        margin: 20,
        borderRadius: 7,
    }


}) 