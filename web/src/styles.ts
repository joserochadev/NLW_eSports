import styled from "styled-components"

export const Container = styled.div`
    /* color: #a1a1aa; */
    color: #fff;
    max-width: 1344px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        margin-top: 80px;
    }

    @media (max-width: 720){
        margin: 0 2rem;
    }

`

export const H2 = styled.h2`
    font-size: 4rem;
    font-weight: bold;
    margin-top: 2rem;

    span{
        background: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        
    }
`

export const GameList = styled.div`

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
    transition: all .02ms;
    margin: 0 2rem;

    
   
`

