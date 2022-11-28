import React, {Component} from 'react';
import './styles.css';
import Photolist from './components/Photolist';
import SearchForm from './components/SearchForm';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      gifs: []
    };
  } 
  componentDidMount(){
    axios.get(`https://giphy.com/gifs/studiosoriginals-goth-gothidays-sLS02WCn8URxikZiCJ`)
    .then(response => {
      this.setState({
        gifs: response.data.data

      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() { 
    console.log(this.state.images);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">PhotoSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <Photolist data={this.state.gifs} />
        </div>
      </div>
    );
  }
}