import React from 'react'
import PageLinks from './PageLinks'
import { pageLinks, socialLinks } from "../data";
import SocialLink from './SocialLink'

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        Copyright &copy; Treasure Global Tours Company     
        <span id="date">{new Date().getFullYear()}</span> All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer