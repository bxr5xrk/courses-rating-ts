import React from "react";
import { ParagraphProps } from "./Paragraph.props";
import st from "./Paragraph.module.css";

const Paragraph = ({ children, size }: ParagraphProps) => {
    return (
        <p
            className={`${st.paragraph} ${
                size === "s" ? st.s : size === "m" ? st.m : st.l
            }`}
        >
            {children}
        </p>
    );
};

export default Paragraph;
