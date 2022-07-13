import React, { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import st from "./Layout.module.css";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={st.wrapper}>
            <Header className={st.header} />

            <Sidebar className={st.sidebar} />
            <div className={st.main}>{children}</div>
            <Footer className={st.footer} />
        </div>
    );
};

export default Layout;
