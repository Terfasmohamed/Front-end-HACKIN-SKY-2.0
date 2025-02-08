import React, { useState } from "react";


import NavBar2 from "./NavBar2";
import UserProfile from "./UserProfile";
import Employ from "./Employ";
import Inbox from "./Inbox.jsx";  // or "../Pages/Inbox/Inbox.jsx" depending on file location
import Home from "./Home.jsx";     // or "../Pages/Home/Home.jsx" depending on file location
import GetStarted from "./GetStarted";

const MainPage1 = () => {
    const [activeTab, setActiveTab] = useState("home");
    function tabToRender() {
        switch (activeTab) {
            case "profile":
                return <UserProfile />;
            case "Inbox":
                return <Inbox />;
            case "home":
                return <Home />;
            case "Employ":
                return <Employ />;
            case "log out":
                return <GetStarted />;
            default:
                return <Home />;
        }
    }
    return (
        <div>
            {/* <NavBar2 /> */}
            {tabToRender()}
        </div>
    );
};

export default MainPage1;