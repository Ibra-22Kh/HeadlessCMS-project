import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            We are a team of passionate and dedicated professionals who
            love to bring you the best products and services at affordable
            prices.We also offer fast and free shipping on all orders, no matter where you are. We value your
            satisfaction and feedback, so feel free to contact us anytime if you
            have any questions or concerns. We are always here to help.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            We would love to hear from you. Whether you have a question, a
            suggestion, or a problem, we are always ready to assist you. Our
            customer service team is available from Monday to Friday, 9 am to 5
            pm (EST). We aim to respond to all inquiries within 24 hours. Thank
            you for your interest in E-Store. We look forward to hearing from
            you.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">E-Store</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="images/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
