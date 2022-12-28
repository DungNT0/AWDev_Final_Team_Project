import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import AccountingNavbar from "../../component/accounting-navbar/accounting-navbar";
import "./accounting-payments.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountingPayments = () => {
    return (
        <div class="AccountingPayments">
            <AccountingNavbar />
            <div id="ap_s1">
                <div id="ap_s1_header">
                    Invoices
                </div>

                <div id="ap_s1_search_bar">
                    <label class="ap_s1_label">Search:</label>
                    <input class="ap_s1_input" type="text" placeholder="Student name" />
                </div>
            </div>

            <div id="ap_s2">
                <div class="container ">
                    <div className="crud p-3 mb-5 mt-5 bg-body">
                        <div class="row">
                            <div class="table-responsive ">
                                <table id="students_dttable" class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>STUDENTS</th>
                                            <th>CLASS</th>
                                            <th>TITLE</th>
                                            <th>TOTAL</th>
                                            <th>DAY</th>
                                            <th>OPTIONS</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="ap_tb_row_gray">
                                            <td class="dtable_td_gray">DANG VIET</td>
                                            <td class="dtable_td_gray">A</td>
                                            <td class="dtable_td_gray">OCTOBER INVOICE</td>
                                            <td class="dtable_td_gray">6.000.000VND</td>
                                            <td class="dtable_td_gray">1/10/2022</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-pencil-square">EDIT</button>
                                                <button id="del_btn" class="dtable_td_btn_gray bi-trash">DELETE</button>
                                            </td>
                                        </tr>

                                        <tr class="ap_tb_row_white">
                                            <td class="dtable_td">NGUYEN DUNG</td>
                                            <td class="dtable_td">B</td>
                                            <td class="dtable_td">NEW PAYMENT</td>
                                            <td class="dtable_td">6.000.000VND</td>
                                            <td class="dtable_td">1/12/2022</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-pencil-square">EDIT</button>
                                                <button id="del_btn" class="dtable_td_btn_gray bi-trash">DELETE</button>
                                            </td>
                                        </tr>

                                        <tr class="ap_tb_row_gray">
                                            <td class="dtable_td_gray">CONG THANH</td>
                                            <td class="dtable_td_gray">C</td>
                                            <td class="dtable_td_gray">NOVEMBER INVOICE</td>
                                            <td class="dtable_td_gray">6.000.000VND</td>
                                            <td class="dtable_td_gray">1/11/2022</td>
                                            <td class="dtable_td_btn">
                                                <button class="dtable_td_btn_gray bi-pencil-square">EDIT</button>
                                                <button id="del_btn" class="dtable_td_btn_gray bi-trash">DELETE</button>
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

export default AccountingPayments;