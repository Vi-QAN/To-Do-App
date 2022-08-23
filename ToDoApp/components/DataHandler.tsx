import AsyncStorage from '@react-native-async-storage/async-storage';

const save = async (value: any) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('TODO_DATA', jsonValue)
    } catch (e) {
        console.log('Error saving data to async storage');
        
    }
}

const retrieve = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('TODO_DATA')
        
        const result = jsonValue !== null ? JSON.parse(jsonValue) : null;
        return result;
        
    } catch(e) {
        console.log('error while reading from async storage')
    }
}

export { save, retrieve};