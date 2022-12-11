import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div class="Navbar" style={{ zIndex: '9999' }}>
            <div id="bigborder">
                <div class="sidebar">
                    <img id="qm_logo" src={require("../assets/img/qm_logo.png")} alt="img" />

                    <div id="profile_group">
                        <i class="bi bi-emoji-smile"></i>
                        <div id="username">Đặng Việt</div>
                        <div id="role">ADMIN</div>
                    </div>

                    <button type="button" autoFocus>
                        <a href="/"> <i class="bi bi-house-door"></i> Dashboard</a>
                    </button>

                    <button type="button">
                        <a href="#"> <i class="bi bi-person"></i> Users</a>
                    </button>

                    <button type="button">
                        <a href="#"> <i class="bi bi-person-vcard"></i> Information</a>
                    </button>

                    <button type="button">
                        <a href="#"> <i class="bi bi-clipboard-data"></i> Accounting</a>
                    </button>

                    <button type="button">
                        <a href="#"> <i class="bi bi-book"></i> Classrooms</a>
                    </button>

                    <button type="button">
                        <a href="#"> <i class="bi bi-calendar-check"></i> Attendance</a>
                    </button>

                    <button type="button">
                        <a href="#"> <i class="bi bi-calendar3"></i> Schedules</a>
                    </button>
                </div>
            </div>
        </div>
    );
};



export default Navbar;
