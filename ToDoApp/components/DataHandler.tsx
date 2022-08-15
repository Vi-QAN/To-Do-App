import AsyncStorage from '@react-native-async-storage/async-storage';

const dataFormat = (data: any) => {
        
    const formatted = data.map((item: any) => {
        return [item.date,item.taskList];
    })
    return formatted;
}
const save = async (value: any) => {
    try {
        // const formatted = dataFormat(value);
        // console.log(formatted);
        const jsonValue = JSON.stringify(value)
        console.log(jsonValue);
        // await AsyncStorage.setItem('TODO_DATA', jsonValue)
    } catch (e) {
        // saving error
    }
}

const retrieve = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('TODO_DATA')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}

export { save, retrieve};