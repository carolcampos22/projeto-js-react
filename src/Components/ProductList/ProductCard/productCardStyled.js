import styled from 'styled-components'

export const CardDescription = styled.section`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    width: 15vw;
    justify-content: space-around;
    margin: 1vh;
    
    .name-product{
        font-size: 2vh
    }

    .price-product{
        font-size: 3vh
    }

    img{
        width: 15vw;
        height: 18vw
    }
`;

export const Botao = styled.button`
    background-color: darkblue;
    color: white;
    width: 10vw;
    height: 5vh;
    border-radius: 5px;
    align-self: center;
    font-weight: bold;
    font-size: 2vh;
    margin-bottom: .8vh; 
    border: none;
    
    :hover{
        background-color: hotpink;
        cursor: pointer;
        color: black;
        transform: scale(1.1);
    }

    :active {
        background-color: green;
    }

`

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    

    

`