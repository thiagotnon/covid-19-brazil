import React from 'react';
import { Map, Globe } from 'react-feather';


import './styles.css';
import flag from '../../assets/img/flag.png'

const Header = () => (
  <header id="main-header">
    <div className="container">
    <h1><a href="/"><img className="flag" src={flag} alt=""/> <span>Covid-19 Brasil</span></a></h1>  
   <div className="box-nav">
      <a className="nav" href={'/'}> <Map size={14} /> <span>Todos os Estados</span></a>
      <a className="nav" href={'/countries'}> <Globe size={14} /> <span>Países</span></a>
   </div>
    </div>

  </header>
);

export default Header;