import React from "react";
import PropTypes from "prop-types";

export class MenuItem extends React.Component {
    render () {
        return (
            <li className="menu-item">
            {this.props.icon}

            <span className="menu-item-title">
                {this.props.label}
            </span>

            <span className="menu-item-count">
                {this.props.count}
            </span>
        </li>
        );
    }
}

MenuItem.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    count: PropTypes.number
};
