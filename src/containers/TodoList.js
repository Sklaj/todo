import React from "react";
import IconClosed from "../img/IconClosed";
import IconOpen from "../img/IconOpen";
import IconStar from "../img/IconStar";
import IconGithub from "../img/IconGithub";

export class TodoList extends React.Component {
    render() {
        return (
            <main className="main-wrapper">
                <div className="main-container">
                    <aside className="nav-wrapper">
                        <div className="nav-background"/>

                        <nav className="nav">
                            <div className="system-buttons">
                                <div className="sys-btn red"/>
                                <div className="sys-btn yellow"/>
                                <div className="sys-btn green"/>
                            </div>

                            <ul className="menu">
                                <li className="menu-item">
                                    <IconGithub/>

                                    <span className="menu-item-title">
                                        All
                                    </span>

                                    <span className="menu-item-count">
                                        12
                                    </span>
                                </li>

                                <li className="menu-item">
                                    <IconOpen/>

                                    <span className="menu-item-title">
                                        Open
                                    </span>

                                    <span className="menu-item-count">
                                        4
                                    </span>
                                </li>

                                <li className="menu-item">
                                    <IconClosed/>

                                    <span className="menu-item-title">
                                        Closed
                                    </span>

                                    <span className="menu-item-count">
                                        8
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </aside>

                    <section>
                        tasks selection
                    </section>
                </div>
            </main>
        );
    }
};
