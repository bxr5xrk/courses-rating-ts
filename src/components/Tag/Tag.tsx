import React from "react";
import { TagProps } from "./Tag.props";
import st from "./Tag.module.css";

const Tag = ({ size, children, color, href, ...props }: TagProps) => {
    return (
        <div
            className={`${st.tag} ${size === "s" ? st.s : st.m} ${
                color === "primary"
                    ? st.primary
                    : color === "red"
                    ? st.red
                    : color === "green"
                    ? st.green
                    : st.ghost
            }`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Tag;
