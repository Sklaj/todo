import React from "react";
import PropTypes from "prop-types";

import { TaskListSingleTask } from "./TaskListSingleTask";

export const TaskListDayItem = (props) => {

    console.log(props.taskList);

    return (
        <li key={props.key}>
            <p className="list-item-title">
                {props.date}
            </p>

            <ul className="tasks-list">
                {props.taskList.map((task, indx) => {
                    return (
                        <TaskListSingleTask
                            key={indx} 
                            title={task.title}
                        />
                    );
                })}
            </ul>
    </li>
    );
};

TaskListDayItem.propTypes = {
    key: PropTypes.number,
    date: PropTypes.string,
    taskList: PropTypes.array
};


