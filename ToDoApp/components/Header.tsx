import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { IconButton } from '@react-native-material/core'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

const Header = (props: any) => {
    const [count,setCount] = useState(0);
    return (
        <View style = {styles.container}>
            <Text style={styles.date}>
                {props.today.format('dddd, MMMM D')}
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
        paddingHorizontal: '6%',
        margin: 0,
        top: 0,
        left: 0,
    }, 

    date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#b3b3b3',
        letterSpacing: 0,
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

export default Header;