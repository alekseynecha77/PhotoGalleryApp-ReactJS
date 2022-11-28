import React, {Component} from 'react';
import './styles.css';
import Photolist from './components/Photolist';
import SearchForm from './components/SearchForm';
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      photos: []
    };
  } 
  componentDidMount(){
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=2AZXqjzwqcIcMvRdVBY70bUBdZbTvhSp&limit=9&rating=pg')
    .then(response => {
      this.setState({
        photos: response.data.data

      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() { 
    console.log(this.state.photos);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">PhotoSearch</h1>
            <SearchForm />      
          </div>   
        </div>    
        <div className="main-content">
          <Photolist data={this.state.photos} />
        </div>
      </div>
    );
  }
}