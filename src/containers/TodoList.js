import React from "react";

import SystemButtons from "./components/SystemButtons";
import Menu from "./components/Menu";
import { TaskList } from "./components/TaskList";

export class TodoList extends React.Component {
    render() {
        return (
            <main className="main-wrapper">
                <div className="main-container">
                    <aside className="nav-wrapper">
                        <div className="nav-background"/>

                        <nav className="nav">
                            <SystemButtons/>
                            <Menu/>
                        </nav>
                    </aside>

                    <section className="list-wrapper">
                        <TaskList/>
                    </section>
                </div>
            </main>
        );
    }
};
