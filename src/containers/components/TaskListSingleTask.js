import React from "react";
import {useState} from "react";
import PropTypes from "prop-types";
import IconStar from "../../img/IconStar";


export const TaskListSingleTask = (props) => {

    const [clicked, toggleClicked] = useState(true);
    
    const toggleStarState = () => {
        if (clicked) {
            return "list-task-star";
        } else {
            return "list-task-star active";
        }
    };

    return  (
        <li className="list-task" onClick={() => toggleClicked(clicked ? false : true)}>
            <p>
                {props.title}
            </p>

            <div className={toggleStarState()}>
                <IconStar/>
            </div>
        </li>
    );
};

TaskListSingleTask.propTypes = {
    key: PropTypes.number,
    title: PropTypes.string
};
