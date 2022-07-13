import React from "react";
import { HeaderProps } from "./Header.props";

const Header = ({ ...props }: HeaderProps) => {
    return <header {...props}>HEADER</header>;
};

export default Header;
