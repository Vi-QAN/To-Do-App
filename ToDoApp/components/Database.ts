import {Realm, createRealmContext} from '@realm/react';
import { Moment } from 'moment';

// ## add-on for existing project
export class Task extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    isCompleted!: boolean;

    // the Task.generate() method creates Task objects with fields with default values
    static generate(name: string) {
        return {
          _id: new Realm.BSON.ObjectId(),
          name,
          isComplete: false,
        };
    }

    // To use a class as a Realm object type, define the object schema on the static property "schema".
    static schema = {
        name: 'Task',
        primaryKey: '_id',
        properties: {
          _id: 'objectId',
          name: 'string',
          isCompleted: {type: 'bool', default: false},
        },
    };
}   

export class Date extends Realm.Object {
    _id!: Moment;
    taskList!: Array<Task>;
    
    // the Task.generate() method creates Task objects with fields with default values
    static generate(moment: Moment) {
        return {
          _id: moment.toDate(),
          taskList: [],
        };
    }

    // To use a class as a Realm object type, define the object schema on the static property "schema".
    static schema = {
        name: 'Date',
        primaryKey: '_id',
        properties: {
          _id: 'date',
          name: 'string',
          isCompleted: {type: 'bool', default: false},
        },
    };
}

const config = {
    schema: [Task,Date],
};
export default createRealmContext(config);
  
// ### for new realm project
// const TaskSchema = {
//     name: "Task",
//     properties: {
//         _id: "int",
//         name: "string",
//         isCompleted: "bool"
//     },
//     primaryKey: "_id"
// }

// const DateSchema = {
//     name: "Date",
//     properties: {
//         _id: "string",
//         taskList: "list"
//     },
//     primaryKey: "_id",
// }

// export const openConnection = async () => {
//     const realm = await Realm.open({
//         path: "myrealm",
//         schema: [DateSchema,TaskSchema],
//     });
//     return realm;
// }

// // Add a couple of Tasks in a single, atomic transaction
// export const writeData = (props: any) => {
//     props.realm.write(() => {
//         let date = props.realm.create("Date", {
//           _id: 1,
//           taskList: []
//         });
      
        
//         console.log(`created first date: ${date._id} & ${date.taskList}`);
//     });
// }

// export const readData = (props: any) => {
//     const dates = props.realm.objects("Date");
//     console.log(`The lists of tasks are: ${dates.map((date: any) => date._id)}`);
//     return dates;
// }

  