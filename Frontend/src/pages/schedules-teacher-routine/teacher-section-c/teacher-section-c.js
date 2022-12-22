import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import SchedulesNavbar from "../../../component/schedule-navbar/schedule-navbar";
import "./teacher-section-c.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TeacherSectionC = () => {
    return (
        <div class="TeacherSectionC">
            <SchedulesNavbar />
            <div id="tsc_s1">
                <div id="tsc_s1_class_select_group">
                    <div id="tsc_s1_class_header">
                        CLASS:
                    </div>

                    <div id="tsc_s1_class">
                        <select id="tsc_s1_class_select">
                            <option class="tsc_s1_class_option"> Class 1</option>
                        </select>
                    </div>
                </div>

                <div id="tsc_s1_teacher_name_group">
                    <div id="tsc_s1_teacher_header">
                        TEACHER NAME:
                    </div>

                    <div id="tsc_s1_teacher_name">
                        <input id="tsc_s1_teacher_name_input" type="text"/>
                    </div>
                </div>
            </div>

            <div id="tsc_s2">
                <div class="tsc_s1_user_groups">
                    <a class="tsc_s1_user_page_links" href="/schedules-teacher-routine">SECTION A </a>
                    <div class="tsc_border"></div>
                </div>

                <div class="tsc_s1_user_groups">
                    <a class="tsc_s1_user_page_links" href="/teacher-section-b">SECTION B</a>
                    <div class="tsc_border"></div>
                </div>

                <div class="tsc_s1_user_groups">
                    <a class="tsc_s1_user_page_links" href="/teacher-section-c">SECTION C</a>
                    <div class="tsc_border"></div>
                </div>
            </div>

            <div id="tsc_s3">
                <div id="tsc_s3_calendar">
                    <div class="tsc_s3_dotw">
                        <label class="tsc_s3_dotw_label">Monday</label>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                    </div>

                    <div class="tsc_s3_dotw">
                        <label class="tsc_s3_dotw_label">Tuesday</label>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                    </div>

                    <div class="tsc_s3_dotw">
                        <label class="tsc_s3_dotw_label">Wednesday</label>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                    </div>

                    <div class="tsc_s3_dotw">
                        <label class="tsc_s3_dotw_label">Thursday</label>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                    </div>
                    
                    <div class="tsc_s3_dotw">
                        <label class="tsc_s3_dotw_label">Friday</label>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                        <input class="tsc_s3_dotw_input" type="text"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TeacherSectionC;