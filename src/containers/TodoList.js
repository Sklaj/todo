import React from "react";

export class TodoList extends React.Component {
    render() {
        return (
            <main className="main-wrapper">
                <div className="main-container">
                    <aside className="nav-wrapper">
                        <div className="nav-background"/>

                        <div className="system-buttons">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                        <nav className="nav">
                            <ul>
                                <li>
                                    All
                                </li>

                                <li>
                                    Open
                                </li>

                                <li>
                                    Closed
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
