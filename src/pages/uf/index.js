import React, { Component } from 'react';
import api from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationTriangle, faCross } from '@fortawesome/free-solid-svg-icons'

import 'moment/locale/pt-br'
import moment from 'moment'


import './styles.css';

export default class UF extends Component {
  state = {
    region: {}
  }

 async componentDidMount() {
   const { uf } = this.props.match.params;

    const response = await api.get(`/brazil/uf/${uf}`);

    this.setState({region: response.data})
  }
  render() {
    const { region } = this.state;
    return (
      <div className="detail">
        <div className="box-data">
         <img src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${region.uf}.png`} alt=""/>
          <h1>{region.state} - {region.uf}</h1>
          <p className="cases"><small>
            <FontAwesomeIcon icon={faCheck} /> 
            <b> Casos</b> </small><br />{region.cases}</p>
          <p className="suspect"><small>
          <FontAwesomeIcon icon={faExclamationTriangle} /> 
          <b> Suspeitas</b> </small><br />{region.suspects}</p>
          <p className="death"><small>
          <FontAwesomeIcon icon={faCross} /> 
          <b> Mortes</b> </small><br />{region.deaths}</p>
          <p className="date"><small><b>Atualizado em</b> </small><br />{moment(region.data).format('llll')}</p>
        </div>
      </div>
    );
  }
 }
