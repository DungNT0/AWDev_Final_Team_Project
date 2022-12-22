import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import SchedulesNavbar from "../../component/schedule-navbar/schedule-navbar";
import "./schedules-teacher-routine.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SchedulesTeacher = () => {
    return (
        <div class="SchedulesTeacher">
            <SchedulesNavbar />
            <div id="str_s1">
                <div id="str_s1_class_select_group">
                    <div id="str_s1_class_header">
                        CLASS:
                    </div>

                    <div id="str_s1_class">
                        <select id="str_s1_class_select">
                            <option class="str_s1_class_option"> Class 1</option>
                        </select>
                    </div>
                </div>

                <div id="str_s1_teacher_name_group">
                    <div id="str_s1_teacher_header">
                        TEACHER NAME:
                    </div>

                    <div id="str_s1_teacher_name">
                        <input id="str_s1_teacher_name_input" type="text"/>
                    </div>
                </div>
            </div>

            <div id="str_s2">
                <div class="str_s1_user_groups">
                    <a class="str_s1_user_page_links" href="/schedules-teacher-routine">SECTION A </a>
                    <div class="str_border"></div>
                </div>

                <div class="str_s1_user_groups">
                    <a class="str_s1_user_page_links" href="/teacher-section-b">SECTION B</a>
                    <div class="str_border"></div>
                </div>

                <div class="str_s1_user_groups">
                    <a class="str_s1_user_page_links" href="/teacher-section-c">SECTION C</a>
                    <div class="str_border"></div>
                </div>
            </div>

            <div id="str_s3">
                <div id="str_s3_calendar">
                    <div class="str_s3_dotw">
                        <label class="str_s3_dotw_label">Monday</label>
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                    </div>

                    <div class="str_s3_dotw">
                        <label class="str_s3_dotw_label">Tuesday</label>
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                    </div>

                    <div class="str_s3_dotw">
                        <label class="str_s3_dotw_label">Wednesday</label>
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                    </div>

                    <div class="str_s3_dotw">
                        <label class="str_s3_dotw_label">Thursday</label>
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                    </div>

                    <div class="str_s3_dotw">
                        <label class="str_s3_dotw_label">Friday</label>
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                        <input class="str_s3_dotw_input" type="text" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SchedulesTeacher;