import React from "react";
import { FooterProps } from "./Footer.props";
import st from "./Footer.module.css";
import format from "date-fns/format";


const Footer = ({ ...props }: FooterProps) => {
    return (
        <footer {...props}>
            <div className={st.footer}>
                <p>Top Courses © 2021 - {format(new Date(), 'yyyy')} All rights reserved</p>
                <div>
                    <a href="/">Terms of use</a>
                    <a href="/">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
