import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./user-teachers.css";
import UserNavbar from "../../component/user-navbar/user-navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const UserTeachers = () => {
    return (
        <div class="UserTeachers">
            <UserNavbar/>
            <div id="ut_s2">
                <div class="ut_s1_user_groups">
                    <a class="ut_s1_user_page_links" href="/user-teachers">TEACHERS </a>
                    <div class="ut_border"></div>
                </div>

                <div class="ut_s1_user_groups">
                    <a class="ut_s1_user_page_links" href="/teachers-new">NEW</a>
                    <div class="ut_border"></div>
                </div>
            </div>

            <div id="ut_s3">
                <div class="container">
                    <div className="crud p-3 mb-5 mt-5 bg-body">
                        <div class="row">
                            <div class="table-responsive">
                                <table id="teachers_dttable" class="table table-striped table-hover table-bordered">
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

export default UserTeachers;