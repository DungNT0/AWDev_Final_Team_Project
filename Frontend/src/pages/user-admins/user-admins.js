import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import UserNavbar from "../../component/user-navbar/user-navbar";
import "./user-admins.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserAdmins = () => {
    return (
        <div class="UserAdmins">
            <UserNavbar/>
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