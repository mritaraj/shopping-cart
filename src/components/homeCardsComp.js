import React, { Component } from 'react';
import CategoryJson from '../server/categories/index.get.json';
import {Container,Row, Col, Figure} from 'react-bootstrap'
import HomeCards from './homeCards';
// import  '../styles/home.css';
class HomeCardsComp extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[],
            data_loadded:false
        }
    }
    sortByOrder( a, b ) {
        if ( a.order < b.order ){
          return -1;
        }
        if ( a.order > b.order ){
          return 1;
        }
        return 0;
      }
    componentDidMount(){
       
        console.log(CategoryJson)
        this.setState({
            categories:CategoryJson,
            data_loadded:true
        })
          
    }
    render() {
        const {categories, data_loadded}= this.state
        
        return (
        <main>
            {
                 <HomeCards categories={categories}/>    
                
            }
            
        </main>
        );
    }
}

export default HomeCardsComp;