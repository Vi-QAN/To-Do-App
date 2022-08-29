import { View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import React from 'react';


const Add = (props: any) => {
    return (
        <View style={styles.container}>
            <TouchableHighlight 
                activeOpacity={0.6} 
                underlayColor={'#FFF'} 
                onPress={
                    () => props.setPopUp(true)} 
            >
                <View style={styles.btn}>
                    <Text style={styles.text}>+</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
    
    
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        margin: 0,
        alignItems: 'center',
        
    },
    btn: {
        backgroundColor: `#1e90ff`,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 25,
        padding: '4%',
        color: '#fff',
        
    }

})

export default Add;