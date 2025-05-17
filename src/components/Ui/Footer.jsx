import footerContact from "../../api/footerApi.json";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import {NavLink}  from "react-router-dom"
import "../../style/Footer.css"

const Footer = () => {
  const footerIcon = {
    IoLocationSharp: <IoLocationSharp />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <div>
      <footer className="footer-section">
        <div className="container grid grid-three-cols">
          {footerContact.map((curData, index) => {
            const { icon, title, details } = curData;
            return (
              <div className="footer-contact" key={index}>
                <div className="icon">{footerIcon[icon]}</div>
                <div className="footer-contact-text">
                  <p>{title}</p>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </footer>
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                @Copyright & copy;2025 , All Right Reserved
                
              </p>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


