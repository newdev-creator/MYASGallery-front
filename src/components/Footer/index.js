import { Link } from 'react-router-dom';
import './footer.scss';
import 'animate.css';

import fb from 'src/components/Footer/logo_fb.png';
import ig from 'src/components/Footer/logo_ig.png';

const Footer = () => (
  <div className="nav-bottom">
    <div className="info-gallery">
      <Link to="/myas-gallery">MYAS Gallery</Link>
      <div className="link-info" />
      <a href="tel:0675973972">+33 675 973 972</a>
      <div className="link-info" />
      <Link to="/contact">Contact</Link>
      <div className="link-info" />
      <Link to="/mentions-legales">Mentions légales</Link>
      <div className="link-info" />
      <div className="social-network-logo">
        <a href="#"><img src={fb} alt="fb" /></a>
        <a href="#"><img src={ig} alt="ig" /></a>
      </div>
    </div>
  </div>
);

export default Footer;
