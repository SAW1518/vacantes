import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import Cue from './img/uni/CUE-Vertical.png';
import MM from './img/uni/Logotipo Mario Molina.png';
import UAG from './img/uni/UAG PNG.png';
import UDG from './img/uni/UdeG.jpg';
import UDGEGRE from './img/uni/UDGegresados.jpg';

import Up from './img/uni/UP (1).jpg';
import Uteg from './img/uni/UTEG.png';
import Uvm from './img/uni/UVM.png';
import Maristas from './img/uni/LogoMaristas.jpg';
import Univa from './img/uni/UNIVA.jpg';
import Modal from 'react-awesome-modal';

import { chunk } from "lodash";


let universidades=[
  {
    img: Cue,
    id: 1,
    uni: "UNIVERSIDAD MARISTA DE GUADALAJARA",
    nombre: "Lic. Olga Amalia Alvídrez Cedillo",
    cargo: "Responsable de Vinculación Univeristaria / Bolsa de Trabajo / Prácticas Profesionales" ,
    tel: "(33) 3540 3900 Ext. 1031",
    email: "vinculacion@umg.edu.mx",
    pag_web: "www.umg.edu.mx",
    pag_empleo: "http://bolsadetrabajo.umg.edu.mx/",
    liga_carreras: "https://umg.edu.mx/portal/#",
    domicilio: "Marcelino Champagnat No. 2981 Col. Loma Bonita 45087Zapopan, Jal"
  },
  {
    img: Maristas,
    id: 2,
    uni: "ITESO",
    nombre: "Lic. Mariana Alvarez Unda",
    cargo: "Coordinadora del Inserción Profesional  y Empleo Centro Universidad Empresa" ,
    tel: "(33) 3669 3434 Ext. 3317",
    email: "marianaalvarez@iteso.mx",
    pag_web: "www.btrabajo.iteso.mx",
    pag_empleo: "http://iteso.trabajando.com/empresas",
    liga_carreras: "www.carreras.iteso.mx",
    domicilio: "Periférico Sur Manuel Gómez Morín # 8585 C.P. 45604 Tlaquepaque, Jal"
  },
  {
    img: MM,
    id: 3,
    uni: "TECNOLÓGICO SUPERIOR DE JALISCO MARIO MOLINA",
    nombre1: "Ing. Laura Ivón García Aldás",
    nombre2: "Mtro. José Ricardo Macias Becerra",
    cargo1: "Jefe de Seguimiento de Egresados, Bolsa de Trabajo, Visitas Empresariales y Convenios Institucionales" ,
    cargo2: "Emprendimiento e Innovación",
    tel1: "(33) 3682 1180 Ext. 143",
    tel2: "(33) 3208 9656",
    email1: "lauraivon@zapopan.tecmm.edu.mx",
    email2: 	"ricardo.macias@itszapopan.edu.mx",
    pag_web: "www.itszapopan.edu.mx",
    pag_empleo: " ",
    liga_carreras: "	http://www.itszapopan.edu.mx/#",
    domicilio: "Camino Arenero No. 1101, Col. El Bajío 45019  Zapopan, Jal"
  },

  {
    img: UDGEGRE,
    id: 4,
    uni: "UDG EGRESADOS",
    nombre: "Mtro. Adán Josué Michel Ramos",
    cargo: "Bolsa de Trabajo" ,
    tel: "(33) 3826 3989 y  (33) 3825 9328 Ext. 105 ",
    email: "adan.michel@redudg.udg.mx",
    pag_web: "www.egresados.udg.mx",
    pag_empleo: "	http://www.redempleo.udg.mx/",
    liga_carreras: "http://www.udg.mx/es/oferta-academica",
    domicilio: "Lerdo de Tejada No. 2121 Col. Americana, 44160 Guadalajara, Jal"
  },
  {
    img: UDG,
    id: 5,
    uni: "COORDINACIÓN DE SERVICIOS ESTUDIANTILES UDG",
    nombre1: "Mtro. Jonathan Ryan Martínez Chavira",
    nombre2: "Lic. Irma Serrano",
    cargo1: "Jefe de la Unidad de Planeación y Desarrollo" ,
    cargo2: 	"Responsable de Bolsa de Trabajo ",
    tel1: "(33) 3826 3641 Ext. 120",
    email1: "jchav@hotmail.com",
    email2: 	"irma.serrano@redudg.udg.mx	",
    pag_web: "www.estudiantes.udg.mx",
    pag_empleo: "",
    liga_carreras: "",
    domicilio: "Pedro Moreno 1029, Col. Centro"
  },
  {
    img: Univa,
    id: 6,
    uni: "UNIVA",
    nombre1: "Lic. Layll Janet Rodríguez Amezcua",
    nombre2: "Lic. Isabel Yamileth Barraza Solis",
    nombre3: "Lic. Bárbara Castañeda",
    cargo1: "Encargado de Bolsa de trabajo Egresados" ,
    cargo2: 	"Auxiliar de Bolsa de Trabajo y Egresados",
    cargo3: "Cobertura del cargo de la auxiliar por incapacidad",
    tel1: "(33) 3134 0858/00 Ext. 1812",
    tel2: "(33) 3134 0858/00 Ext. 1013",
    email1: "layll.rodriguez@univa.mx",
    email2: 	"yamileth.barraza@univa.mx	",
    email3: "bolsa.trabajo@univa.mx",
    pag_web: "www.univa.mx",
    pag_empleo: "	http://www.univa.mx/sedes/guadalajara/alumni/bolsa-de-trabajo/empresa",
    liga_carreras: "	http://www.univa.mx/sedes/guadalajara/oferta-academica",
    domicilio: "Av. Tepeyac No. 4800 Prados Tepeyac 45050 Zapopan, Jal"
  },
  {
    img: Up,
    id: 7,
    uni: "UP",
    nombre: " Lic. Mónica Andrea Rodríguez Ramírez",
    cargo: "ALUMNI Coordinadora de Bolsa de Trabajo" ,
    tel: "(33) 1368 2200  Ext. 4047",
    email: "	mrodrig@up.edu.mx",
    pag_web: "www.up.edu.mx",
    pag_empleo: "https://bolsadetrabajo.up.edu.mx/index.php",
    liga_carreras: "http://www.up.edu.mx/es/admisiones/licenciaturas/gdl",
    domicilio: "Calzada Circunvalación Pte. No.49"
  },
  {
    img: UAG,
    id: 8,
    uni: "UP",
    nombre: " Lic. Laura Estela Martín Escobedo",
    cargo: "Especialista en Bolsa de Trabajo y Medios Digitales" ,
    tel: "(33) 3648 8824 Ext. 32449",
    email: "lmartin@edu.uag.mx",
    pag_web: "http://www.uag.mx/",
    pag_empleo: "http://mediosuag.mx/noticias-uag/egresados",
    liga_carreras: "http://www.uag.mx/",
    domicilio: "Av. Patria 1201, Col. Lomas del Valle CP 45129, Zapopan, Jal"
  },

  {
    img: Uvm,
    id: 9,
    uni: "UVM",
    nombre: " ",
    cargo: " " ,
    tel: "(33) 3777 3400",
    email: "empleabilidad@uvmnet.edu",
    pag_web: "https://uvm.mx/ ",
    pag_empleo: "https://uvm.mx/talento-uvm",
    liga_carreras: "https://uvm.mx/licenciatura-ingenierias ",
    domicilio: "Periférico Poniente No. 7900 Jardines de Collí, C.P. 45010, Jardines de Collí, 45010 Zapopan, Jal. "
  },
  {
    img: Uteg,
    id: 10,
    uni: "UTEG ",
    nombre: " ",
    cargo: " " ,
    tel: "3619-0619 / 3619-0496 ",
    email: "bolsadetrabajo@uteg.edu.mx",
    pag_web: "http://www.uteg.edu.mx/",
    pag_empleo: "http://www.uteg.edu.mx/?page_id=8239",
    liga_carreras: "http://www.uteg.edu.mx/?fw-portfolio=licenciaturas ",
    domicilio: "Héroes Ferrocarrileros 1325, Col. La Aurora, C.P. 44460, Guadalajara, Jalisco, México."
  }



]

const options = {
  title: "Informacion De Universidades",
  dimensions: {
    datatable: {
      width: "95%",
      height: "20%"
    },
    row: {
      height: "60px"
    }
  },
  keyColumn: "id",
  font: "Arial",
  data: {
    columns: [
      {
        id: "id",
        label: "Id",
        colSize: "20px",

      },
      {
        id: "uni",
        label: "UNIVERSIDAD / INSTITUTO ",
        colSize: "250px",

      },
      {
        id: "nombre",
        label: "NOMBRE",
        colSize: "150px",

      },
      {
        id: "cargo",
        label: "CARGO / ÁREA",
        colSize: "200px",

      },
      {
        id: "tel",
        label: "TELEFONO",
        colSize: "150px",

      },
      {
        id: "email",
        label: "CORREO INSTITUCIONAL",
        colSize: "150px",

      },
      {
        id: "pweb",
        label: "PAGINA WEB",
        colSize: "150px",


      },
      {
        id: "pempleo",
        label: "LIGA DE PORTAL DE EMPLEO",
        colSize: "200px",
       },
      {
        id: "lcarreras",
        label: "LIGA DE CARRERAS ",
        colSize: "150px",

      },
      {
        id: "domicilio",
        label: "DOMICILIO",
        colSize: "400px",


      }
    ],
    rows: [
      {
        id: "1",
        uni: "UNIVERSIDAD MARISTA DE GUADALAJARA",
        nombre: "Lic. Olga Amalia Alvídrez Cedillo",
        cargo: "Responsable de Vinculación Univeristaria / Bolsa de Trabajo / Prácticas Profesionales" ,
        tel: "(33) 3540 3900 Ext. 1031",
        email: "vinculacion@umg.edu.mx",
        pweb: "www.umg.edu.mx",
        pempleo: "http://bolsadetrabajo.umg.edu.mx/",
        lcarreras: "https://umg.edu.mx/portal/#",
        domicilio: "Marcelino Champagnat No. 2981 Col. Loma Bonita 45087Zapopan, Jal"
      },
      {
        id: "2",
        uni: "ITESO",
        nombre: "Lic. Mariana Alvarez Unda",
        cargo: "Coordinadora del Inserción Profesional  y Empleo Centro Universidad Empresa" ,
        tel: "(33) 3669 3434 Ext. 3317",
        email: "marianaalvarez@iteso.mx",
        pweb: "www.btrabajo.iteso.mx",
        pempleo: "http://iteso.trabajando.com/empresas",
        lcarreras: "www.carreras.iteso.mx",
        domicilio: "Periférico Sur Manuel Gómez Morín # 8585 C.P. 45604 Tlaquepaque, Jal"
      }



    ]
  },
  features: {
     canPrint: true,
     canSelectRow: false,
    canDownload: true,
    canSearch: true,
    canRefreshRows: true,
    canOrderColumns: true,
    canSaveUserConfiguration: true,
    userConfiguration: {
      columnsOrder: ["id", "uni", "nombre", "cargo", "tel", "email","pweb", "pempleo", "lcarreras", "domicilio"],
      copyToClipboard: false
    },


  }
};
class Carrusel extends Component {
  constructor(props) {
      super(props);
      this.state = {
          visible : false
      }
  }

  openModal() {
      this.setState({
          visible : true
      });
  }

  closeModal() {
      this.setState({
          visible : false
      });
  }
  actionsRow = ({ type, payload }) => {
    console.log(type);
    console.log(payload);
  };

  refreshRows = () => {
    const { rows } = options.data;
    const randomRows = Math.floor(Math.random() * rows.length) + 1;
    const randomTime = Math.floor(Math.random() * 4000) + 1000;
    const randomResolve = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomResolve > 3) {
          resolve(chunk(rows, randomRows)[0]);
        }
        reject(new Error("err"));
      }, randomTime);
    });
  };

    render() {
        return (


          <div className="carousel">
            <Carousel showArrows={true} showThumbs={false} thumbWidth={100} autoPlay={true}	infiniteLoop={true} interval={15000}    onClickItem={() => this.openModal()}   >


              <div>
              <img src={Cue} width="200" height="500"  />

              </div>

              <div>
                <img src={MM} width="300" height="400" />
               </div>

              <div>
              <img src={UAG} width="400" height="400"/>

               </div>
               <div>
                 <img src={UDG} width="600" height="400" />
                </div>

               <div>
               <img src={Up}  width="400" height="400"/>

                </div>
                <div>
                  <img src={Uteg}  width="400" height="400"/>
                 </div>

                <div>
                <img src={Uvm} width="400" height="400"/>

                 </div>
                 <div>
                   <img src={Maristas}  width="400" height="400"/>
                  </div>

                 <div>
                 <img src={Univa} width="400" height="400"/>

                  </div>
                  <div>
                  <img src={UDGEGRE} width="400" height="400"/>

                   </div>

            </Carousel>

            <Modal visible={this.state.visible} width="1000" height="500" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div>
                    <div class="col-md-12 col-6 text-center">


                  </div>

                      <br></br>
                  <center>  <button type="button" class="btn btn-danger" href="javascript:void(0);" onClick={() => this.closeModal()}>Cerrar</button></center>
                </div>
            </Modal>
          </div>

          )
        }
      }

export default Carrusel;
