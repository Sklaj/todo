import React from "react";
import PropTypes from "prop-types";
import IconStar from "../../img/IconStar";


export const TaskListSingleTask = (props) => {

    return  (
        <li>
            {props.title}

            <IconStar/>
        </li>
    );
};

TaskListSingleTask.propTypes = {
    key: PropTypes.number,
    title: PropTypes.string
};


