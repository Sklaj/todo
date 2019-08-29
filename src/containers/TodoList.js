import React from "react";

import SystemButtons from "./components/SystemButtons";
import Menu from "./components/Menu";

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

                    <section className="task-list-wrapper">
                        tasks selection
                    </section>
                </div>
            </main>
        );
    }
};
