import React from "react";
import { SidebarProps } from "./Sidebar.props";

const Sidebar = ({...props}: SidebarProps) => {

    return (
        <nav {...props}>
            SIDEBAR
        </nav>
    )
}

export default Sidebar