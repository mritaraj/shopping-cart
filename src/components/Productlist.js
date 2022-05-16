import React, { Component } from 'react';
import ProductCard from './ProductCard';
// import './productList.style.scss';
import  '../styles/products.css';
import productJson from '../server/products/index.get.json'
class Productlist extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[],
            data_loadded:false
        }
    }
    
    componentDidMount(){   
    this.setState({
                    products:productJson,
                    data_loadded:true
                })
      
     }
    
    render() {
        const {products, data_loadded}= this.props
        const clss =this.props.clss
        console.log(clss);
        return (
            <main className=' pcard'>
            {
                products.map((prod) => {
                    return <ProductCard  product={prod}/> 
                })
                  
            }
            
        </main>
        );
    }
}

export default Productlist;