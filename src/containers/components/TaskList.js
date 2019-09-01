import React from "react";
import {TaskListDayItem} from "./TaskListDayItem";
import {tasksMockedData} from "../../constants/tasksMockedData";

export const TaskList = () => {
    return (
        <ul>
           {tasksMockedData.map((listItem, indx) => {
                return (
                    <TaskListDayItem 
                        date={listItem.date} 
                        taskList={listItem.tasks} 
                        key={indx}
                    />
                );
           })}
        </ul>
    );
};