import React from 'react';
import {ContainerHome, ContainerProducts, FormOrdenation} from './homeStyled'

import ProductCard from "../ProductCard/ProductCard"

export const Home = (props) => {
   
    const productsOnScreen = props.productList
    .filter(product => props.searchFilter === "" || product.name.toLowerCase().includes(props.searchFilter))
    .filter((product) => product.price >= props.minFilter || props.minFilter === "")
    .filter((product) => product.price <= props.maxFilter || props.maxFilter === "")
    .map((product) => {
        return (
            

            <ProductCard key={product.id} product={product} addToCart={props.addToCart}/>
        )
    })
    
    return (
        <ContainerHome>

            <div className='qtde'>Quantidade de produtos: {productsOnScreen.length}</div>  
            <ContainerProducts>
                             
                {productsOnScreen}
        
            </ContainerProducts>
        </ContainerHome>
    )
}
