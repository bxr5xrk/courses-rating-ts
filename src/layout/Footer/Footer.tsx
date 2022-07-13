import React from "react";
import { FooterProps } from "./Footer.props";

const Footer = ({ ...props }: FooterProps) => {
    return (
        <footer {...props}>
            <p>Top Courses</p>
            <p>sdcsdcsdcd</p>
        </footer>
    );
};

export default Footer;
