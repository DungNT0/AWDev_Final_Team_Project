import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import AccountingNavbar from "../../component/accounting-navbar/accounting-navbar";
import "./accounting-new-payment.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountingNewPayment = () => {
    return (
        <div class="AccountingNewPayment">
            <AccountingNavbar />
            <div id="anp_s1">
                <div class="anp_headers">
                    Invoice details
                </div>

                <div class="anp_s1_input_form">
                    <label class="anp_s1_label">CLASS:</label>
                    <select class="anp_s1_input">
                        <option>Select</option>
                    </select>
                </div>

                <div class="anp_s1_input_form">
                    <label class="anp_s1_label">SUBJECTS:</label>
                    <select class="anp_s1_input">
                        <option>Select</option>
                    </select>
                </div>

                <div class="anp_s1_input_form">
                    <label class="anp_s1_label">TITLE:</label>
                    <input class="anp_s1_input" type="text" />
                </div>

                <div class="anp_s1_input_form">
                    <label class="anp_s1_label">DESCRIPTION:</label>
                    <input id="anp_s1_description_input" class="anp_s1_input" type="text" />
                </div>

                <div class="anp_s1_input_form" id="anp_s1_date_input_form">
                    <label id="anp_s1_date_label" class="anp_s1_label">DATE:</label>
                    <input id="anp_s1_date_input" class="anp_s1_input" type="date" />
                </div>
            </div>

            <div id="anp_s2">
                <div id="anp_s2_p1">
                    <div class="anp_headers">
                        Payment details
                    </div>

                    <div class="anp_s2_input_form">
                        <label class="anp_s2_label">Total:</label>
                        <input class="anp_s2_input" type="text" />
                    </div>

                    <div class="anp_s2_input_form" id="anp_s2_amount_input_form">
                        <label class="anp_s2_label">Amount:</label>
                        <input class="anp_s2_input" type="text" />
                    </div>

                    <div class="anp_s2_input_form">
                        <label class="anp_s2_label">Status:</label>
                        <select class="anp_s2_input">
                            <option>Select</option>
                        </select>
                    </div>

                    <div class="anp_s2_input_form">
                        <label class="anp_s2_label">Method:</label>
                        <select class="anp_s2_input">
                            <option>Select</option>
                        </select>
                    </div>
                </div>

                <div id="anp_s2_p2">
                    <button type="button" id="anp_s2_btn">Create invoice</button>
                </div>
            </div>
        </div>
    );
};

export default AccountingNewPayment;