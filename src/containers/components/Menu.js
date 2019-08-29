import React from "react";

import IconClosed from "../../img/IconClosed";
import IconOpen from "../../img/IconOpen";
import IconGithub from "../../img/IconGithub";
import { MenuItem } from "./MenuItem";

const Menu = () => {
    return (
        <ul className="menu">
            <MenuItem icon={<IconGithub/>} label="All" count={12}/>
            <MenuItem icon={<IconOpen/>} label="Open" count={4}/>
            <MenuItem icon={<IconClosed/>} label="Closed" count={8}/>
        </ul>
    );
}

export default Menu;