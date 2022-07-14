import { View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import React from 'react';


class Add extends React.Component {
    constructor(props: any){
        super(props);

        

    }

    onPress = () => {

    }

    render() {
        const styles = StyleSheet.create({
            container: {
                position: 'absolute',
                bottom: '1%',
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

        return (
            
            <View style={styles.container}>
                <TouchableHighlight activeOpacity={0.6} underlayColor={'#FFF'} onPress={this.onPress} >
                    <View style={styles.btn}>
                        <Text style={styles.text}>+</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
    
}

export default Add;