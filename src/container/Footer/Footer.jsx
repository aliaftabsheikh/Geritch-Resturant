import React from 'react';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi'
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
  </div>
);

export default Footer;
