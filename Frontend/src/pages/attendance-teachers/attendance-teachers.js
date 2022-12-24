import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import AttendanceNavbar from "../../component/attendance-navbar/attendance-navbar";
import "./attendance-teachers.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AttendanceTeachers = () => {
    return (
        <div class="AttendanceTeachers">
            <AttendanceNavbar />
            <div id="at_s1">
                <div id="at_s1_class_select_group">
                    <div id="at_s1_class_header">
                        CLASS:
                    </div>

                    <div class="at_s1_select" id="at_s1_class">
                        <select id="at_s1_class_select">
                            <option class="at_s1_class_option"> Class 1</option>
                        </select>
                    </div>
                </div>

                <div id="at_s1_subjects_select_group">
                    <div id="at_s1_subjects_header">
                        SUBJECTS:
                    </div>

                    <div class="at_s1_select" id="at_s1_subject">
                        <select id="at_s1_subject_select">
                            <option class="at_s1_subjects_option"> Select</option>
                        </select>
                    </div>
                </div>

                <div id="at_s1_date_select_group">
                    <div id="at_s1_date_header">
                        DATE:
                    </div>

                    <div class="at_s1_select" id="at_s1_date">
                        <select id="at_s1_date_select">
                            <option class="at_s1_date_option"> 06/10/2002</option>
                        </select>
                    </div>
                </div>

                <button type="button" id="at_s1_view_btn">View</button>
            </div>

            <div id="at_s2">
                <div id="at_s2_header">
                    Attendance
                </div>

                <div class="at_s2_container ">
                    <div class="crud p-3 mb-5 mt-5 bg-body">
                        <div class="row">
                            <div class="at_s2_table-responsive ">
                                <table class="at_s2_table">
                                    <thead>
                                        <tr class="at_s2_th_row">
                                            <th class="at_s2_th">STUDENT</th>
                                            <th id="at_s2_status_th" class="at_s2_th">STATUS</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="at_s2_dt_row">
                                            <td class="at_s2_dtable_td">
                                                <i class="at_s2_dtable_bi bi-person-circle"></i> <div class="at_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="at_s2_dtable_td">
                                                <div class="at_s2_absent_status_group">
                                                    <input name="at_s2_absent_status" value="present" type="radio" class="at_s2_rdo_input" /> Present
                                                    <input name="at_s2_absent_status" value="late" type="radio" class="at_s2_rdo_input" /> Late
                                                    <input name="at_s2_absent_status" value="absent" type="radio" class="at_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="at_s2_dt_row">
                                            <td class="at_s2_dtable_td">
                                                <i class="at_s2_dtable_bi bi-person-circle"></i> <div class="at_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="at_s2_dtable_td">
                                                <div class="at_s2_absent_status_group">
                                                    <input name="at_s2_absent_status2" value="present" type="radio" class="at_s2_rdo_input" /> Present
                                                    <input name="at_s2_absent_status2" value="late" type="radio" class="at_s2_rdo_input" /> Late
                                                    <input name="at_s2_absent_status2" value="absent" type="radio" class="at_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="at_s2_dt_row">
                                            <td class="at_s2_dtable_td">
                                                <i class="at_s2_dtable_bi bi-person-circle"></i> <div class="at_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="at_s2_dtable_td">
                                                <div class="at_s2_absent_status_group">
                                                    <input name="at_s2_absent_status3" value="present" type="radio" class="at_s2_rdo_input" /> Present
                                                    <input name="at_s2_absent_status3" value="late" type="radio" class="at_s2_rdo_input" /> Late
                                                    <input name="at_s2_absent_status3" value="absent" type="radio" class="at_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="at_s2_dt_row">
                                            <td class="at_s2_dtable_td">
                                                <i class="at_s2_dtable_bi bi-person-circle"></i> <div class="at_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="at_s2_dtable_td">
                                                <div class="at_s2_absent_status_group">
                                                    <input name="at_s2_absent_status4" value="present" type="radio" class="at_s2_rdo_input" /> Present
                                                    <input name="at_s2_absent_status4" value="late" type="radio" class="at_s2_rdo_input" /> Late
                                                    <input name="at_s2_absent_status4" value="absent" type="radio" class="at_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="at_s2_dt_row">
                                            <td class="at_s2_dtable_td">
                                                <i class="at_s2_dtable_bi bi-person-circle"></i> <div class="at_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="at_s2_dtable_td">
                                                <div class="at_s2_absent_status_group">
                                                    <input name="at_s2_absent_status5" value="present" type="radio" class="at_s2_rdo_input" /> Present
                                                    <input name="at_s2_absent_status5" value="late" type="radio" class="at_s2_rdo_input" /> Late
                                                    <input name="at_s2_absent_status5" value="absent" type="radio" class="at_s2_rdo_input" /> Absent
                                                </div>

                                            </td>
                                        </tr>

                                        <tr class="at_s2_dt_row">
                                            <td class="at_s2_dtable_td">
                                                <i class="at_s2_dtable_bi bi-person-circle"></i> <div class="at_s2_name">Dang Hoang Viet</div>
                                            </td>

                                            <td class="at_s2_dtable_td">
                                                <div class="at_s2_absent_status_group">
                                                    <input name="at_s2_absent_status6" value="present" type="radio" class="at_s2_rdo_input" /> Present
                                                    <input name="at_s2_absent_status6" value="late" type="radio" class="at_s2_rdo_input" /> Late
                                                    <input name="at_s2_absent_status6" value="absent" type="radio" class="at_s2_rdo_input" /> Absent
                                                </div>

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

export default AttendanceTeachers;