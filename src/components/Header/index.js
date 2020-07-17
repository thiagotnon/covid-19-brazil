import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMap } from '@fortawesome/free-solid-svg-icons'


import './styles.css';
import flag from '../../assets/img/flag.png'

const Header = () => (
  <header id="main-header">
    <div className="container">
    <h1><a href="/"><img className="flag" src={flag} alt=""/> <span>Covid-19 Brasil</span></a></h1>  
   <div className="box-nav">
      <a className="nav" href={'/'}> <FontAwesomeIcon icon={faMap} />  <span>Todos os Estados</span></a>
      <a className="nav" href={'/countries'}> <FontAwesomeIcon icon={faGlobe} /> <span>Países</span></a>
   </div>
    </div>

  </header>
);

export default Header;