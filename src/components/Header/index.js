import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faMap } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


import './styles.css';
import flag from '../../assets/img/flag.png'


const Header = () => (
  <header id="main-header">
    <div className="container">
    <h1><img className="flag" src={flag} alt=""/> <span>Covid-19 Brasil</span></h1>  
   <div className="box-nav">
      <Link className="nav" to={'/'}> <FontAwesomeIcon icon={faMap} />  <span>Todos os Estados</span></Link>
      <Link className="nav" to={'/countries'}> <FontAwesomeIcon icon={faGlobe} /> <span>Países</span></Link>
      <a className="git" href='https://github.com/thiagotnon/covid-19-brazil' title="GitHub" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
   </div>
    </div>

  </header>
);

export default Header;