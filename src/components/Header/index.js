import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

// Bootstrap features
import {
  Navbar,
  Nav,
} from 'react-bootstrap';

import './header.scss';
import logomyasGallery from './logo.jpg';

const Header = ({
  categories,
}) => {
  // useState to manage the appearance of the burger menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu">
      <Navbar
        className="boostrap-navbar"
        collapseOnSelect
        expand="xl"
        expanded={isOpen}
      >

        <button
          type="button"
          className="navbar-toggler-btn "
          onClick={() => setIsOpen(isOpen ? false : 'expanded')}
        >
          <div className="menu-decor-container">
            <div className="menu-decor" />
            <div className="menu-decor" />
            <div className="menu-decor" />
          </div>
        </button>

        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-list">
            <li className="navbar-element navbar-element-logo">
              <NavLink
                className="menu-link-desktop menu-link-head"
                activeClassName="menu-link--active"
                to="/"
                exact
                onClick={() => setIsOpen(false)}
              >
                <img
                  className="name-head-nav-desktop"
                  src={logomyasGallery}
                  alt="logo"
                  title="myasgallery"
                />
              </NavLink>
            </li>
            <li className="navbar-element">
              <NavLink
                className="menu-link menu-link-contact"
                activeClassName="menu-link"
                to="/contact"
                exact
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </li>
            <li className="navbar-element">
              <NavLink
                className="menu-link menu-link-artists"
                activeClassName="menu-link"
                to="/artistes"
                exact
                onClick={() => setIsOpen(false)}
              >
                Artistes
              </NavLink>
            </li>
            <li className="navbar-element">
              <div className="dropdown">
                <button type="button" className="dropbtn">Œuvres</button>
                <div className="dropdown-content">
                  <NavLink
                    className="menu-link"
                    activeClassName="menu-link"
                    to="/œuvres"
                    exact
                    onClick={() => setIsOpen(false)}
                  >
                    Voir tous
                  </NavLink>
                  {categories.map((item) => (
                    <NavLink
                      key={item.id}
                      className="menu-link"
                      activeClassName="menu-link"
                      to={`/œuvres/categorie/${item.slug}`}
                      exact
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </li>
            <li className="navbar-element">
              <NavLink
                className="menu-link menu-link-events"
                activeClassName="menu-link"
                to="/evenements"
                exact
                onClick={() => setIsOpen(false)}
              >
                Évènements
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>

      <NavLink
        className="menu-link-mobile menu-link-head"
        activeClassName="menu-link--active"
        to="/"
        exact
      >
        <img
          className="name-head-mobile"
          src={logomyasGallery}
          alt="logo"
          title="myasgallery"
        />
      </NavLink>

    </div>
  );
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
