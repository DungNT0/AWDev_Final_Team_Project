import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./dashboard.css";

const Dashboard = () => {
    return (
        <div class="Dashboard">
            <div id="dboard_s1">
                <div id="dboard_s1_banner">
                    <div id="dboard_s1_banner_txt">
                        Has a <br />
                        Beautiful <br />
                        School <br />
                        System
                    </div>
                </div>
            </div>

            <div id="dboard_s2">
                <div class="dboard_s2_roles" id="dboard_s2_admin">
                    <div class="dboard_s2_personels">
                        1 <br /> ADMIN
                    </div>
                </div>

                <div class="dboard_s2_roles" id="dboard_s2_teachers">
                    <div class="dboard_s2_personels">
                        8 <br /> TEACHERS
                    </div>
                </div>

                <div class="dboard_s2_roles" id="dboard_s2_students">
                    <div class="dboard_s2_personels">
                        100 <br /> STUDENTS
                    </div>
                </div>

                <div class="dboard_s2_roles" id="dboard_s2_parents">
                    <div class="dboard_s2_personels">
                        35 <br /> PARENTS
                    </div>
                </div>
            </div>

            <div id="dboard_s3">
                <div id="dboard_s3_ntboard">
                    <div id="dboard_s3_ntboard_txt">
                        NOTICEBOARD
                    </div>

                    <img class="dboard_ntboard_img" src={require("../../assets/img/dboard_nboard_img1.png")} alt="img" />

                    <img class="dboard_ntboard_img" src={require("../../assets/img/dboard_nboard_img2.png")} alt="img" />

                    <img class="dboard_ntboard_img" src={require("../../assets/img/dboard_nboard_img3.png")} alt="img" />

                </div>

                <div id="dboard_s3_on_users">
                    <div id="dboard_s3_on_users_header">
                        ONLINE USERS
                    </div>

                    <div id="dboard_s3_on_users_time">
                        (LAST 5 MINUTES)
                    </div>

                    <div id="dboard_s3_on_users_row1">
                        <img class="dboard_s3_on_user_icon" src={require("../../assets/img/user_online_icon.png")} alt="img" />

                        <div id="dboard_s3_on_username">
                            Đặng Việt
                        </div>

                        <button id="dboard_s3_on_user_role">ADMIN</button>

                        <i class="bi bi-envelope"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;