import styled from "styled-components"

export const TopGradient = styled.div`
max-width: 1200px;
width: 100%;
height: 7rem;
padding-top: .25rem;
border-radius: 8px;
margin-top: 2rem;
margin-bottom: 4rem;
background: linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%);
overflow: hidden;
`

export const Box = styled.div`
width: 100%;
height: 100%;
background-color: #2A2634;
border-radius: 8px;
padding: 2rem 1.5rem;

display: flex;
align-items: center;
justify-content: space-between;

p{
    margin-top: .25rem;
    color: #a1a1aa;
}

button{
    /* padding: 0 3rem; */
    width: 10rem;
    height: 2.5rem;
    border-radius: 8px;
    background: #8B5CF6;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    

}

`
