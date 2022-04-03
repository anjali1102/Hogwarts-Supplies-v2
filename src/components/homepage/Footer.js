import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <h3 className="footer__copy">
          &#169; 2022 Copyright all right reserved
        </h3>
        <h4>Made with ❤ Anjali Chauhan</h4>
        <ul className="f-connectme">
          <li>
            <a href="https://github.com/anjali1102">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/anjalii1102">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/anjali1102">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export { Footer };
