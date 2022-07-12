import React, { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                <div>{children}</div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;
