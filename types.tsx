

export type _Task = {
    id: number,
    taskName: string,
    isFinish: boolean,
    prioritized: boolean,
}

export type _Item = 
    {   
        date: moment.Moment,
        taskList: Array<_Task>,
    } 

