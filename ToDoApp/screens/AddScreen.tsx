import { View, TextInput, StyleSheet, Text, Modal, TouchableHighlight, KeyboardAvoidingView,
TouchableWithoutFeedback, 
Keyboard,
Platform} from 'react-native'
import { useState } from 'react';
import { Ionicons,SimpleLineIcons } from '@expo/vector-icons';


export default function AddScreen(props: any) {
    const [text,setText] = useState('');
    const iconSize = 30;
    const iconColor = '';
    const taskLength = props.taskList.length;
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
                        <View style={styles.fieldContainer}>
                            <Ionicons name="alarm-outline" style={styles.icon} size={iconSize} color="black" />
                        </View>
                        <View style={styles.fieldContainer}>
                            <Ionicons name="md-notifications-outline" size={iconSize} color="black" />
                        </View>
                        <View style={styles.fieldContainer}>
                            <SimpleLineIcons name="tag" size={iconSize - 2} color="black" />
                        </View>
                        

                        <TouchableHighlight 
                            activeOpacity={0.6} 
                            underlayColor={'#FFF'} 
                            onPress={() => {
                                if (text === ''){
                                    return;
                                }
                                let newTask = {
                                    id: taskLength === 0 ? taskLength + 1 : props.taskList[taskLength - 1].id + 1,
                                    taskName: text,
                                    isFinish: false,
                                    prioritized: false,
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