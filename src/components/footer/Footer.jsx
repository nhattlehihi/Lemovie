import React from 'react'
import './footer.scss'
import {Link} from 'react-router-dom';
import bg from '../../assets/photo/footer-bg.jpeg'
import logo from '../../assets/photo/logoo.png'
const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage:`url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                        <Link to="/">LeeMovies</Link>
                    </div>
                    </div>

                    <div className="footer__content__menus">
                        <div className="footer__content__menu">
                            <Link to="/">Home</Link>
                            <Link to="/">Contact us</Link>
                            <Link to="/">Term of service</Link>
                            <Link to="/">About us</Link>
                        </div>
                        <div className="footer__content__menu">
                            <Link to="/">Live</Link>
                            <Link to="/">FAQS</Link>
                            <Link to="/">Premium</Link>
                            <Link to="/">Privacy policy</Link>
                        </div>
                        <div className="footer__content__menu">
                            <Link to="/">You must watch</Link>
                            <Link to="/">Recent release</Link>
                            <Link to="/">Top rated</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer
