import React, {Component} from 'react';
import comite from './img/comite.png'
import logo from './img/logo1.png'
import fav from './img/favicon.png'
import {Link} from 'react-router-dom'
import Carrusel from './Carrusel.js';
import "./css/style.css" ;
import "./lib/bootstrap/css/bootstrap.min.css" ;
import "./lib/font-awesome/css/font-awesome.min.css" ;
import "./lib/animate/animate.min.css"
import "./lib/ionicons/css/ionicons.min.css" ;
import "./lib/owlcarousel/assets/owl.carousel.min.css" ;
import "./lib/lightbox/css/lightbox.min.css" ;
import about from './img/about-img.svg';
import extra from './img/about-extra-1.svg';
import extra2 from './img/about-extra-2.svg';

class HomePage extends Component {
    render() {
        return (
            <div>
                <body>
                <header id="header" class="fixed-top">
                    <div class="container">

                        <div class="logo float-left">

                            <a href="#intro" class="scrollto"> <img src={logo} width="60" height="60"
                                                                    class="img-circle"/></a>
                        </div>

                        <nav class="main-nav float-right d-none d-lg-block">
                            <ul>
                                <li class="active"><a href="#intro">Home</a></li>

                                <li class="drop-down"><a href="">Sesion</a>
                                    <ul>
                                        <li><Link to={"/Reguistro"} className="btn-services scrollto">Registro de
                                            empresa</Link></li>
                                        <li><Link to="/Login" className="  btn-get-started scrollto ">Iniciar
                                            sesion</Link></li>
                                    </ul>
                                </li>
                                <li><a href="#nosotros">Nosotros</a></li>
                                <li><a href="#services">Servicios</a></li>
                                <li><a href="#candidatos">Candidatos</a></li>
                                <li><a href="#eventos">Eventos</a></li>
                                <li><a href="#noticias">Noticias</a></li>
                                <li><a href="#uni">Universidades</a></li>
                                <li><a href="#contact">Contacto</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section id="intro" class="clearfix">
                    <div class="container">
                        <div class="intro-img">
                            <img src={comite} alt="" class="img-fluid" class="img-thumbnail"/>
                        </div>
                        <div class="intro-info">
                            <h2>Trabajando para un <br/><span>Futuro </span> mejor!</h2>
                            <div>
                                <Link to="/Login" className="  btn-get-started scrollto ">Iniciar sesion</Link>
                                <Link to={"/Reguistro"} className="btn-services scrollto">Registrate ya</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <main id="main">
                    <section id="nosotros">
                        <div class="container">

                            <header class="section-header">
                                <h3>Nosotros</h3>
                                <p>Nuestro Objetivo es proporcionar información oportuna para la formación continua de
                                    nuestros egresados y alumnos asi como difundir las oportunidades labores para
                                    ellos.</p>
                            </header>

                            <div class="row about-container">

                                <div class="col-lg-6 content order-lg-1 order-2">
                                    <p>
                                        Comité integrado por instituciones de educación superior para realizar trabajos
                                        conjuntos para el fortalecimiento de sus funciones referentes a Bolsa de Trabajo
                                        y Seguimiento de Egresados</p>

                                    <div class="icon-box wow fadeInUp">
                                        <div class="icon"><i class="fa fa-handshake-o"></i></div>
                                        <h4 class="title"><a href="">Trabajando juntos</a></h4>
                                        <p class="description">Las universidades que forman este comite estan
                                            comprometidas para promover el crecimiento del empleo ayudando a sus
                                            egresados y a las empresas afiliadas al grupo.</p>
                                    </div>

                                    <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                        <div class="icon"><i class="fa fa-binoculars"></i></div>
                                        <h4 class="title"><a href="">Encuentra tus trabajadores</a></h4>
                                        <p class="description">Una vez registrado en la plataforma sube tus vacantes y
                                            nosotros proporcionaremos el personal necesario para tu equipo de
                                            trabajo</p>
                                    </div>

                                    <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                        <div class="icon"><i class="fa fa-bar-chart"></i></div>
                                        <h4 class="title"><a href="">Datos</a></h4>
                                        <p class="description">Conforme a los acuerdos toda la informacion recaudada se
                                            utiliza para el mejoramiento de la plataforma y tener una mejor
                                            estructura</p>
                                    </div>

                                </div>

                                <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                                    <img src={about} class="img-fluid" alt=""/>
                                </div>
                            </div>

                            <div class="row about-extra">
                                <div class="col-lg-6 wow fadeInUp">
                                    <img src={extra} class="img-fluid" alt=""/>
                                </div>
                                <div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                                    <h4>Antecedentes</h4>
                                    <p>
                                        El Comité Interuniversitario de Bolsas de Trabajo y Formación, está integrado
                                        por Universidades e Instituciones Educativas de Nivel Superior, en beneficio de
                                        la Comunidad Universitaria Jalisciense, desde el 26 de enero del 2012.
                                    </p>
                                    <p>
                                        Su finalidad es incrementar la vinculación entre las Universidades y Sector
                                        productivo en el Estado de Jalisco, detectando así las necesidades de
                                        capacitación y especialización que requiere el mercado laboral actual.
                                        Intercambiar las mejores prácticas de las Bolsas de Trabajos entre las
                                        Universidades e Instituciones Educativas de Nivel Superior, han permitido
                                        actualizar los procesos de atención y mejorar servicio a la Comunidad
                                        Universitaria. Vincular la Universidad con el Sector Productivo, es una de las
                                        principales actividades dentro del Comité Interuniversitario de Bolsas de
                                        Trabajo y Formación, la inserción de los alumnos y egresados al mundo
                                        laboral. </p>
                                </div>
                            </div>

                            <div class="row about-extra">
                                <div class="col-lg-6 wow fadeInUp order-1 order-lg-2">
                                    <img src={extra2} class="img-fluid" alt=""/>
                                </div>

                                <div class="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                                    <h4>Estructura</h4>
                                    <p>
                                        El Comité está compuesto por diez Universidades e Instituciones tanto públicas
                                        como privadas, que están representadas por coordinadores de bolsa de trabajo o
                                        vinculación académica. </p>
                                    <p>
                                        A continuación, se mencionan las instituciones participantes: Centro
                                        Universitario UTEG ITESO, Instituto Tecnológico y de Estudios Superiores de
                                        Occidente ITJMMPyH, TecMM, Campus Zapopan UDG, Universidad de Guadalajara UMG,
                                        Universidad Marista de Guadalajara UNIVA, Universidad del Valle de Atemajac UAG,
                                        Universidad Autónoma de Guadalajara UP, Universidad Panamericana UVM,
                                        Universidad del Valle de México </p>
                                    <p>
                                        Los integrantes que conforman este orgulloso Comité, tienen la firme convicción
                                        de que solo trabajando y entendiendo las necesidades de Empresa-Gobierno, se
                                        puede brindar un mejor mañana a nuestros jóvenes universitarios
                                        Jaliscienses. </p>
                                </div>

                            </div>

                        </div>
                    </section>


                    <section id="services" class="section-bg">
                        <div class="container">

                            <header class="section-header">
                                <h3>Servicios</h3>
                                <p>Facil, rapido, eficiente...</p>
                            </header>

                            <div class="row">

                                <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="box">
                                        <div class="icon"><i class="ion-ios-world-outline"></i></div>
                                        <h4 class="title"><a href="">Accesible</a></h4>
                                        <p class="description">Como empresa asociada al comite tienes la oportunidad de
                                            iniciar sesion subir tus vacantes y dependiendo del perfil de tus empleados
                                            la universidad que cuente con ese perfil llenara tu vacante</p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                                    <div class="box">
                                        <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                                        <h4 class="title"><a href="">Egresados</a></h4>
                                        <p class="description">Cada universidad cuenta con cientos de egresados y
                                            becarios listos para cubrir tu vacante</p>
                                    </div>
                                </div>

                                <div class="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s"
                                     data-wow-duration="1.4s">
                                    <div class="box">
                                        <div class="icon"><i class="ion-ios-paper-outline"></i></div>
                                        <h4 class="title"><a href="">Requisitos</a></h4>
                                        <p class="description">Una vez afiliado al comite puedes subir las vacantes
                                            necesitadas solo se te pide que contestes las solicitudes y al año
                                            participes en la recaudacion de datos del comite</p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s"
                                     data-wow-duration="1.4s">
                                    <div class="box">
                                        <div class="icon"><i class="ion-ios-clock-outline"></i></div>
                                        <h4 class="title"><a href="">Tiempo</a></h4>
                                        <p class="description">Cada universidad esta comprometida con el comite para
                                            responder lo antesposible con personal capaz de despeñar el trabajo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="candidatos" class="wow fadeIn">
                        <div class="container">
                            <header class="section-header">
                                <h3>Candidatos</h3>
                                <p>Si deseas formar parte de los candidatos para empleo manda un correo con tu CV en
                                    formato pdf y nosotros te contactaremos lo antes posible</p>
                            </header>

                            <div class="row row-eq-height justify-content-center">

                                <div class="col-lg-4 mb-4">
                                    <div class="card wow bounceInUp">
                                        <i class="fa fa-address-book"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">Candidatos</h5>
                                            <p class="card-text">Cada universidad proporciona el candidato
                                                correspomdiente al area necesitada</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 mb-4">
                                    <div class="card wow bounceInUp">
                                        <i class="fa fa-calendar"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">Respuestas</h5>
                                            <p class="card-text">Los candidatos son propuestos por medio de la
                                                plataforma o por via al correo de contacto designado en la empresa </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 mb-4">
                                    <div class="card wow bounceInUp">
                                        <i class="fa fa-check"></i>
                                        <div class="card-body">
                                            <h5 class="card-title">Eficiente</h5>
                                            <p class="card-text">La iniciativa de esta plataforma es para fomentar el
                                                crecimento lavoral de nuestros egresados agilizando el proceso de
                                                contacto en empresa y empleado </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row counters">

                                <div class="col-lg-3 col-6 text-center">
                                    <span data-toggle="counter-up">10</span>
                                    <p>Universidades</p>
                                </div>

                                <div class="col-lg-3 col-6 text-center">
                                    <span data-toggle="counter-up">150+</span>
                                    <p>Carreras</p>
                                </div>

                                <div class="col-lg-3 col-6 text-center">
                                    <span data-toggle="counter-up">15</span>
                                    <p>Empresas</p>
                                </div>

                                <div class="col-lg-3 col-6 text-center">
                                    <span data-toggle="counter-up">1500+</span>
                                    <p>Candidatos</p>
                                </div>

                            </div>

                        </div>
                    </section>
                    <section id="eventos" class="section-bg">
                        <div class="container">

                            <header class="section-header">
                                <h3>Eventos</h3>
                                <p>Ultimos eventos en relacion a la bolsa de trabajo</p>
                            </header>
                        </div>
                    </section>

                    <section id="noticias">
                        <div class="container">
                            <div class="section-header">
                                <h3>Noticias</h3>
                                <p>Ultimas Noticias en relacion a la bolsa de trabajo</p>
                            </div>
                        </div>
                    </section>
                    <section id="uni" class="section-bg">

                        <div class="container">

                            <div class="section-header">
                                <h3>Universidades</h3>
                                <p>Universidades que forman parte del comite</p>
                                <Carrusel/>
                            </div>
                        </div>
                    </section>
                    <section id="contact">
                        <div class="container-fluid">
                            <div class="section-header">
                                <h3>Contacto</h3>
                            </div>
                            <div class="col-md-offset-3">
                                <div class="row">
                                    <div class="col-md-5 info">
                                        <i class="ion-ios-location-outline"></i>
                                        <p>Camino Arenero 1101, 45019 Zapopan, Jal.</p>
                                    </div>
                                    <div class="col-md-4 info">
                                        <i class="ion-ios-email-outline"></i>
                                        <p>CIBF@gmail.com</p>
                                    </div>
                                    <div class="col-md-3 info">
                                        <i class="ion-ios-telephone-outline"></i>
                                        <p>+52 3334792657</p>
                                    </div>
                                </div>
                                <div class="form">
                                    <div id="sendmessage">Tu mensaje se a enviado correctamente!</div>
                                    <div id="errormessage"></div>
                                    <form action="" method="post" role="form" class="contactForm">
                                        <div class="form-row">
                                            <div class="form-group col-lg-6">
                                                <input type="text" name="name" class="form-control" id="name"
                                                       placeholder="Nombre" data-rule="minlen:4"
                                                       data-msg="Please enter at least 4 chars"/>
                                                <div class="validation"></div>
                                            </div>
                                            <div class="form-group col-lg-6">
                                                <input type="email" class="form-control" name="email" id="email"
                                                       placeholder=" Email" data-rule="email"
                                                       data-msg="Please enter a valid email"/>
                                                <div class="validation"></div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="subject" id="subject"
                                                   placeholder="Asunto" data-rule="minlen:4"
                                                   data-msg="Please enter at least 8 chars of subject"/>
                                            <div class="validation"></div>
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" name="message" rows="5" data-rule="required"
                                                      data-msg="Please write something for us"
                                                      placeholder="Mensaje"></textarea>
                                            <div class="validation"></div>
                                        </div>
                                        <div class="text-center">
                                            <button type="submit" title="Send Message">Enviar Mensaje</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                <footer id="footer">
                    <div class="footer-top">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-4 col-md-6 footer-info">
                                    <h3>Comite Interuniversitario de Bolsa de Trabajo y Formacion</h3>
                                    <p>En el Area de Contacto Puedes Mandar correo paracualquier duda o como candidato
                                        postularte en el comite mandando tu CV en formatto pdf y te contestaremos lo
                                        antes posible.</p>
                                </div>

                                <div class="col-lg-2 col-md-6 footer-links">
                                    <h4>Links</h4>
                                    <ul><br/><br/>
                                        <li><a href="#intro">Home</a></li>
                                        <li><a href="#nosotros">Nosotros</a></li>
                                        <li><a href="#services">Servicios</a></li>
                                        <li><a href="#candidatos">Candidatos</a></li>
                                        <li><a href="#eventos">Eventos</a></li>
                                        <li><a href="#noticias">Noticias</a></li>
                                        <li><a href="#uni">Universidades</a></li>
                                        <li><a href="#contact">Contacto</a></li>
                                    </ul>
                                </div>

                                <div class="col-lg-3 col-md-6 footer-contact">
                                    <h4>Contacto</h4>
                                    <p>
                                        Camino Arenero 1101, 45019 Zapopan, Jal.<br/>
                                        <strong>TEL:</strong> +52 3334792657<br/>
                                        <strong>Email:</strong> CIBTF@gmail.com<br/>
                                    </p>

                                    <div class="social-links">
                                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                                        <a href="https://www.facebook.com/Comite-Interuniversitario-de-Bolsas-de-Trabajo-y-Formacion-536341416396527"
                                           class="facebook"><i class="fa fa-facebook"></i></a>
                                        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                                        <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                                        <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                                    </div>

                                </div>

                                <div class="col-lg-3 col-md-6 footer-newsletter">
                                    <h4>Comite Interuniversitario de bolsa de trabajo y formacion</h4>
                                    <p>CIBTF</p>
                                    <form action="" method="post">
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="copyright">
                            &copy; Copyright <strong>CIBF</strong>. All Rights Reserved
                        </div>

                    </div>
                </footer>


                <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

                <script src="js/main.js"></script>


                </body>
            </div>


        );
    }
}

export default HomePage;
