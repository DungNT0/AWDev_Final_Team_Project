import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"
import "./accounting-navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AccountingNavbar = () => {
    return (
        <div class="AccountingNavbar">
            <div id="accn_s1">
                <div  id="accn_s1_navbar">
                    <div class="accn_s1_user_groups">
                        <a class="accn_s1_user_page_links" href="/accounting-new-payment"> <i class="accn_s1_bi bi-wallet"></i> <br /> NEW PAYMENT </a>
                        <div class="accn_border"></div>
                    </div>

                    <div class="accn_s1_user_groups">
                        <a class="accn_s1_user_page_links" href="/accounting-payments"> <i class="accn_s1_bi bi-currency-dollar"></i> <br /> PAYMENTS </a>
                        <div class="accn_border"></div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default AccountingNavbar;