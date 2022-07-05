import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { IconButton } from '@react-native-material/core'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export default function Header(){
    const [count,setCount] = useState(0);
    const buttonPress = () => setCount(count + 1);
    return (
        <View style = {styles.container}>
            <Text style={styles.date}>
                Today Date
            </Text>
            <View style = {styles.titleBox}>
                <Text style={styles.title}>
                    ToDo-List
                </Text>
                <IconButton
                    style={styles.button}
                    icon={props => <Icon name="magnify" {...props} />}
                >

                </IconButton>
            </View>
        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        height: '15%',
        width: '100%',
        position: 'absolute',
        padding: 12,
        margin: 0,
        top: 1,
        left: 2,
    }, 

    date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#b3b3b3',
        letterSpacing: 1,
        marginBottom: 2
    },

    titleBox: {
        width: '100%',
        height: 'auto',
        padding: 0,
        margin: 0,
        flexDirection: 'row',
    },

    
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        
    },

    button: {
        fontWeight: 'bold',
        height: 50,
        width: 50,
        alignItems: 'center',
        padding: 20,
        marginVertical: 5,
        position: 'absolute',
        right: '0.5%'
    },


});