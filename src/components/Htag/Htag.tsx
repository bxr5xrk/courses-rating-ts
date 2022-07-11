import React from "react";
import { HtagProp } from "./Htag.props";
import st from "./Htag.module.css";

const Htag = ({ children, tag }: HtagProp) => {
    switch (tag) {
        case "h1":
            return <h1 className={st.h1}>{children}</h1>;
        case "h2":
            return <h2 className={st.h2}>{children}</h2>;
        case "h3":
            return <h3 className={st.h3}>{children}</h3>;
        default:
            <></>;
    }

    return <></>;
};

export default Htag;
