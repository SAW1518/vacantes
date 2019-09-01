import React, {Component} from 'react';
import "../Home/styles/home1.css"
import "../Home/styles/home2.css"
import { Link } from 'react-router-dom'
import client_logo_1 from './img/client_logo/client_logo_1.png'
import client_logo_2 from './img/client_logo/client_logo_2.png'
import client_logo_3 from './img/client_logo/client_logo_3.png'
import client_logo_4 from './img/client_logo/client_logo_4.png'
import client_logo_5 from './img/client_logo/client_logo_5.png'
import banner_img from './img/banner_img.png'
import about_img from './img/about_img.png'
import about_img_1 from './img/about_img_1.png'
import footer_logo from './img/footer_logo.png'

import Icon_1 from './img/icon/Icon_1.png'



type HomeProps = {}
type HomeState = {}

class Home extends Component<HomeProps, HomeState> {

    state = {};

    render() {
        return (
            <div>
                <header className="main_menu">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg navbar-light">

                                    <a className="navbar-brand single_page_logo" href="index.html"> <img
                                        src={footer_logo} alt="logo"/> </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="menu_icon"></span>
                                    </button>

                                    <div className="collapse navbar-collapse main-menu-item"
                                         id="navbarSupportedContent">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link" href="index.html">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="features.html">features</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pricing.html">pricing</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="blog.html"
                                                   id="navbarDropdown"
                                                   role="button" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false">
                                                    Blog
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <a className="dropdown-item" href="blog.html"> blog</a>
                                                    <a className="dropdown-item" href="single-blog.html">Single blog</a>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="blog.html"
                                                   id="navbarDropdown1"
                                                   role="button" data-toggle="dropdown" aria-haspopup="true"
                                                   aria-expanded="false">
                                                    pages
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                                    <a className="dropdown-item" href="elements.html">Elements</a>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="contact.html">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to="/Login" className="d-none d-sm-block btn_1 home_page_btn">Iniciar secion</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="banner_part">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-5">
                                <div className="banner_img d-none d-lg-block">
                                    <img src={banner_img} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="banner_text">
                                    <div className="banner_text_iner">
                                        <h1>Conecta con las personas para tu empereasa</h1>
                                        <p>La mejor plataforma para encontrar emplados resien egresados </p>
                                        <Link to={"/Reguistro"} className="btn_2">Reguistrarte ya</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="about_us section_padding">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-6 col-lg-5">
                                <div className="about_us_text">
                                    <img src={Icon_1} alt=""/>
                                        <h2>Conecta con las personas</h2>
                                        <p>Promociona a tus estudiantes para que encuentren su primer empleo</p>
                                        <a href="#" className="btn_2">Conoce mas</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="learning_img">
                                    <img src={about_img} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="about_us right_time">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-md-6 col-lg-6">
                                <div className="learning_img">
                                    <img src={about_img_1} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5">
                                <div className="about_us_text">

                                        <h2>Mantente siempre en comunicacion </h2>
                                        <p>Encuentra siempre ala persona correcta para el trabajo</p>
                                        <a href="#" className="btn_2">CONOCE MAS</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>


                <section className="client_logo bak">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="client_logo_slider owl-carousel d-flex justify-content-between">
                                    <div className="single_client_logo">
                                        <img src={client_logo_1}  alt=""/>
                                    </div>
                                    <div className="single_client_logo">
                                        <img src={client_logo_2} alt=""/>
                                    </div>
                                    <div className="single_client_logo">
                                        <img src={client_logo_3} alt=""/>
                                    </div>
                                    <div className="single_client_logo">
                                        <img src={client_logo_4} alt=""/>
                                    </div>
                                    <div className="single_client_logo">
                                        <img src={client_logo_5} alt=""/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer_part">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-4 col-lg-4">
                                <div className="single_footer_part">
                                    <a href="index.html" className="footer_logo_iner"> <img src={footer_logo}
                                                                                            alt="#"/> </a>

                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2">
                                <div className="single_footer_part">
                                    <h4>About Us</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="">Managed Website</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2">
                                <div className="single_footer_part">
                                    <h4>Quick Links</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="">Store Hours</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-2">
                                <div className="single_footer_part">
                                    <h4>My Account</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="">Press Inquiries</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-4 col-md-3 col-lg-2">
                                <div className="single_footer_part">
                                    <h4>Resources</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="">Application Security</a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                            <div className="row">
                                <div className="col-lg-8">

                                </div>
                                <div className="col-lg-4">
                                    <div className="footer_icon social_icon">

                                    </div>
                                </div>
                            </div>
                    </div>
                </footer>



            </div>
        )
    }
}

export default Home;
