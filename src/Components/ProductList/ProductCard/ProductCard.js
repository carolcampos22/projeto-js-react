import React from 'react';
import { CardDescription, Botao, Container } from './productCardStyled'

const ProductCard = (props) => {

    return (
        <Container>

            <CardDescription className='productDescription'>
                <img src={props.product.image} alt={props.product.name} />
                <p className='name-product'>{props.product.name}</p>
                <p className='price-product'>R${props.product.price}</p>
                <Botao onClick={() => props.addToCart(props.product)}>Adicionar ao carrinho</Botao>
            </CardDescription>

        </Container>
    )
}

export default ProductCard;