import React, {components} from 'react';
import Navbar from './components/Navbar';
import './styles.css';
import Photolist from './components/Photolist';
import SearchForm from './components/SearchForm'

export default class App extends components {
  constructor() {
    super();
    this.state ={
      photos: []
    };
  } 
  componentDidMount(){
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => response.json())
      .then(responseData =>{
        this.setState({photos: responseData.data});
      })
      .catch(error =>{
        console.log('error fetching', error)
      })
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
          <Photolist />
          <Navbar />
        </div>
      </div>
    );
  }
}