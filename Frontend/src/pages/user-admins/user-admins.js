import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import UserNavbar from "../../component/user-navbar/user-navbar";
import "./user-admins.css";
import "bootstrap/dist/css/bootstrap.min.css";

const UserAdmins = () => {
    return (
        <div class="UserAdmins">
            <UserNavbar />
            <div id="ua_s3">
                <div class="container ">
                    <div className="crud p-3 mb-5 mt-5 bg-body">
                        <div class="row">
                            <div class="table-responsive ">
                                <table class="table table-striped table-bordered">
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

                                    <tbody>
                                        <tr class="tb_row_gray">
                                            <td class="dtable_td">VIET</td>
                                            <td class="dtable_td">DANG</td>
                                            <td class="dtable_td">123456789@GMAIL.COM</td>
                                            <td class="dtable_td">06/10/2002</td>
                                            <td class="dtable_td">0896455385</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-person-circle">PROFILE</button>
                                            </td>
                                        </tr>
                                    </tbody>
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