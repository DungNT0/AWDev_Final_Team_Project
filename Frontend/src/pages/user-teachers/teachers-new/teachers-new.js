import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./teachers-new.css";
import UserNavbar from "../../../component/user-navbar/user-navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const TeachersNew = () => {

    return (
        <div class="TeachersNew">
            <UserNavbar/>
            <div id="tn_s2">
                <div class="tn_s1_user_groups">
                    <a class="tn_s1_user_page_links" href="/user-teachers">TEACHERS </a>
                    <div class="tn_border"></div>
                </div>

                <div class="tn_s1_user_groups">
                    <a class="tn_s1_user_page_links" href="/teachers-new">NEW</a>
                    <div class="tn_border"></div>
                </div>
            </div>

            <div id="tn_s3">
                <div id="tn_s3_header">New</div>

                <div>
                    <label class="tn_s3_label">Name</label> 
                    <input class="tn_s3_input" type="text" />
                </div>

                <div>
                    <label class="tn_s3_label">Username</label> 
                    <input class="tn_s3_input" type="text" />
                </div>

                <div>
                    <label class="tn_s3_label">Email</label> 
                    <input class="tn_s3_input" type="email" />
                </div>

                <div>
                    <label class="tn_s3_label">Phone</label> 
                    <input class="tn_s3_input" type="number" />
                </div>

                <div>
                    <label class="tn_s3_label">Address</label> 
                    <input class="tn_s3_input" type="text" />
                </div>

                <div>
                    <label class="tn_s3_label">Birthday</label> 
                    <input class="tn_s3_input" type="text" />
                </div>

                <div>
                    <label class="tn_s3_label">Salary</label> 
                    <input class="tn_s3_input" type="number" />
                </div>

                <div>
                    <label class="tn_s3_label">Password</label> 
                    <input class="tn_s3_input" type="password" />
                </div>

                <div>
                    <label class="tn_s3_label">Gender</label> 
                    <input type="radio" name="tn_s3_genders" value="male" class="tn_s3_checkbox" id="tn_s3_male_checkbox"/>  Male 
                    <input type="radio" name="tn_s3_genders" value="female" class="tn_s3_checkbox" id="tn_s3_female_checkbox"/> Female
                </div>

                <div>
                    <div id="tn_s3_upload_photo_label" class="tn_s3_label">Profile Photo</div> 
                    <label id="tn_s3_upph_img" for="tn_s3_upload_photo"> <img src={require("../../../assets/img/tn_s3_upload_img.png")}/> </label>
                    <input id="tn_s3_upload_photo" name="photo" class="tn_s3_input" type="file" />
                </div>

                <button id="tn_s3_save_btn" type="submit">Save</button>
            </div>

        </div>
    );
};

export default TeachersNew;