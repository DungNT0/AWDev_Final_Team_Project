import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./user-admins.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserAdmins = () => {
    return (
        <div class="UserAdmins">
            <div id="ua_s1">
                <div class="UsersNavbar" id="ua_s1_navbar">
                    <div class="ua_s1_user_groups">
                        <a class="ua_s1_user_page_links" href="/user-admins"> <i class="ua_s1_bi bi-person"></i> <br /> ADMINS </a>
                        <div class="ua_border"></div>
                    </div>

                    <div class="ua_s1_user_groups">
                        <a class="ua_s1_user_page_links" href=""> <i class="ua_s1_bi bi-person"></i> <br /> TEACHERS</a>
                        <div class="ua_border"></div>
                    </div>

                    <div class="ua_s1_user_groups">
                        <a class="ua_s1_user_page_links" href=""> <i class="ua_s1_bi bi-person"></i> <br /> PARENTS</a>
                        <div class="ua_border"></div>
                    </div>

                    <div class="ua_s1_user_groups">
                        <a class="ua_s1_user_page_links" href=""> <i class="ua_s1_bi bi-person"></i> <br /> STUDENTS</a>
                        <div class="ua_border"></div>
                    </div>

                    <div class="ua_s1_user_groups">
                        <a class="ua_s1_user_page_links" href=""> <i class="ua_s1_bi bi-person"></i> <br /> ADMISSIONS</a>
                        <div class="ua_border"></div>
                    </div>
                </div>
            </div>

            <div id="ua_s2">
                <div class="ua_s1_user_groups">
                    <a class="ua_s1_user_page_links" href="/user-admins">ADMINS </a>
                    <div class="ua_border"></div>
                </div>

                <div class="ua_s1_user_groups">
                    <a class="ua_s1_user_page_links" href="">NEW</a>
                    <div class="ua_border"></div>
                </div>
            </div>

            <div id="ua_s3">
                <div class="container ">
                    <div className="crud p-3 mb-5 mt-5 bg-body">
                        <div class="row">
                            <div class="table-responsive ">
                                <table class="table table-striped table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>FIRST NAME</th>
                                            <th>LAST NAME</th>
                                            <th>EMAIL</th>
                                            <th>BIRTHDAY</th>
                                            <th>PHONE NUMBER</th>
                                            <th>OPTIONS</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default UserAdmins;