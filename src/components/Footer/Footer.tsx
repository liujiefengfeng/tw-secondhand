import * as React from 'react';
import './Footer.css';
import FooterMeum from './FooterMenu';
import { Link } from 'react-router-dom';

const home = require('./home.png');
const person = require('./person.png');
const plus = require('./plus.png');

interface FooterProps {
    activeMenu?: FooterMeum ;
}

export default (props: FooterProps) => (
    <div className="footer">
        <a href="#" className={isActiveMenu(FooterMeum.Home, props.activeMenu)}>
            <img src={home} className="footer__home" alt="home" />
        </a>
        <a href="#">
            <img src={plus} className="footer__plus" alt="plus" />
        </a>
      <Link to="/my-profile">
        <a href="#" className={isActiveMenu(FooterMeum.Person, props.activeMenu)}>
            <img src={person} className="footer__person" alt="person" />
        </a>
      </Link>
    </div>
);

const isActiveMenu = (currentMenu, activeMenu) => {
    if (!!activeMenu && activeMenu === currentMenu) {
        return 'active';
    }
    return '';
};
