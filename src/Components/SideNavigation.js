import React from "react";
import "./Styles/SideNavigation.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SideNavigation = () => {

        const location = useLocation();
        const isActive = (path) => location.pathname === path;

        if (location.pathname === "/dashboard") {
            console.log("success");
        }

        return (
            <div className="side-navigation">
                <Link to="/dashboard">
                    <div className={`side-element ${isActive("/dashboard") ? "active" : ""}`}>
                        <p className="side-element-text">Dashboard</p>
                    </div>
                </Link>
                <Link to="/all-contacts">
                    <div className={`side-element ${isActive("/all-contacts") ? "active" : ""}`}>
                        <p className="side-element-text">Contacts</p>
                    </div>
                </Link>
            </div>
        );
};


export default SideNavigation;

