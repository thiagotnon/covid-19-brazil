import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamationTriangle, faCross } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';


export default class Main extends Component {
  state = {
    region: [],
  }

  componentDidMount() {
    this.loadRegion();
  }
  loadRegion = async () => {
    const response = await api.get('/');
    const { data } = response.data;
    this.setState({ region: data});
  }
  render() {
    const { region } = this.state;
    
    return (
      <div className="region-list">
        
        {region.sort((a, b) => a.state.localeCompare(b.state)).map(state => (
          
          <article key={state.uid}>
           <Link to={`/brazil/uf/${state.uf}`} title={state.state}>
           <div className="box-head">
            <img src={`https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`} alt=""/>
            <h4>{state.state} - {state.uf}</h4>
           </div>
            <div className="box-data">
              <p className="cases">
              <FontAwesomeIcon icon={faCheck} />
                <b>Casos</b>{state.cases}
                </p>
              <p className="suspect">
              <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Suspeitas</b>{state.suspects}
                </p>
              <p className="death">
              <FontAwesomeIcon icon={faCross} />
                <b>Mortes</b>{state.deaths}
                </p>
            </div>
           </Link>
          </article>    
        ))
        }
      </div>
    );
  }
}