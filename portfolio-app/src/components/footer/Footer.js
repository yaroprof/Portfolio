import React from 'react';
import "./style.css";

import linkedin from './../../img/icons/linkedIn.svg';
import github from './../../img/icons/gitHub.svg';
import codepen from './../../img/icons/gitHub.svg';
import twitter from './../../img/icons/twitter.svg';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#">
                <img src={linkedin} alt="link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#">
                <img src={github} alt="link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
