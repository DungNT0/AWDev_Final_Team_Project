import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import SchedulesNavbar from "../../../component/schedule-navbar/schedule-navbar";
import "./teacher-section-b.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TeacherSectionB = () => {
    return (
        <div class="TeacherSectionB">
            <SchedulesNavbar />
            <div id="tsb_s1">
                <div id="tsb_s1_class_select_group">
                    <div id="tsb_s1_class_header">
                        CLASS:
                    </div>

                    <div id="tsb_s1_class">
                        <select id="tsb_s1_class_select">
                            <option class="tsb_s1_class_option"> Class 1</option>
                        </select>
                    </div>
                </div>

                <div id="tsb_s1_teacher_name_group">
                    <div id="tsb_s1_teacher_header">
                        TEACHER NAME:
                    </div>

                    <div id="tsb_s1_teacher_name">
                        <input id="tsb_s1_teacher_name_input" type="text"/>
                    </div>
                </div>
            </div>

            <div id="tsb_s2">
                <div class="tsb_s1_user_groups">
                    <a class="tsb_s1_user_page_links" href="/schedules-teacher-routine">SECTION A </a>
                    <div class="tsb_border"></div>
                </div>

                <div class="tsb_s1_user_groups">
                    <a class="tsb_s1_user_page_links" href="/teacher-section-b">SECTION B</a>
                    <div class="tsb_border"></div>
                </div>

                <div class="tsb_s1_user_groups">
                    <a class="tsb_s1_user_page_links" href="/teacher-section-c">SECTION C</a>
                    <div class="tsb_border"></div>
                </div>
            </div>

            <div id="tsb_s3">
                <div id="tsb_s3_calendar">
                    <div class="tsb_s3_dotw">
                        <label class="tsb_s3_dotw_label">Monday</label>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                    </div>

                    <div class="tsb_s3_dotw">
                        <label class="tsb_s3_dotw_label">Tuesday</label>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                    </div>

                    <div class="tsb_s3_dotw">
                        <label class="tsb_s3_dotw_label">Wednesday</label>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                    </div>

                    <div class="tsb_s3_dotw">
                        <label class="tsb_s3_dotw_label">Thursday</label>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                    </div>
                    
                    <div class="tsb_s3_dotw">
                        <label class="tsb_s3_dotw_label">Friday</label>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                        <input class="tsb_s3_dotw_input" type="text"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeacherSectionB;