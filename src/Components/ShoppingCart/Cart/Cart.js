import React from 'react';
import { Paragraph, Button, Image, Purchases } from './cartStyled';

export const Cart = (props) => {
    
    return (
        <div>
            
            <Purchases>

                <Image src={props.product.image} />
                <Paragraph>{props.product.name}</Paragraph>
                <Paragraph>R${props.product.price}</Paragraph>
                <Paragraph>Quantidade {props.product.amount}</Paragraph>
                <Button onClick={() => props.deleteProductToCart(props.product)}>Remover este produto</Button>
                
            </Purchases>
            
            
        </div>
    )
}

