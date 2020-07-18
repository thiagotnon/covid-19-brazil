import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faHeartbeat, faCross, faClock } from '@fortawesome/free-solid-svg-icons';
import api from '../../services/api';
import 'moment/locale/pt-br'
import moment from 'moment'

import './styles.css';


export default class Countries extends Component {
  state = {
    country: []
  }
  componentDidMount() {
    this.loadRegion();
  }

  loadRegion = async () => {
    const response = await api.get('/countries');
    const { data } = response.data;
    this.setState({country: data})
  }
  render() {
    const { country } = this.state;
    return (
      <div className="country-list">
        {country.map(state => (
          <article key={state.country}>
            <div className="box-head">
            <h1>{state.country}</h1>
           </div>
            
           <div className="box-data">
            <p className="cases">
               <FontAwesomeIcon icon={faCheck} /> 
            <b>Casos </b>{state.cases}
            </p>
            <p className="recovered">
               <FontAwesomeIcon icon={faHeartbeat} /> 
            <b>Recuperados </b>{state.recovered}
            </p>
            <p className="death">
               <FontAwesomeIcon icon={faCross} /> 
            <b>Mortes</b>{state.deaths}
            </p>
            </div>
            <div className="data">
              <span><FontAwesomeIcon icon={faClock} /> {moment(state.updated_at).format('llll')}</span>
            </div>
          </article>
        ))}
      </div>
    );
  }
}