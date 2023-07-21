import styled from 'styled-components';

export const TitleCart = styled.h1`
    color: white;
`

export const Paragraph = styled.p`
    color: white;
    margin-left: 1.5vw;
`

export const Image = styled.img`
    width: 3vw;
`

export const Purchases = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    
`

export const Button = styled.button`
    margin-left: .5vw;
    color: white;
    background-color: red;
    font-weight: 700;
    border-radius: 0% .5vw;
    border: solid black;

    :hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`