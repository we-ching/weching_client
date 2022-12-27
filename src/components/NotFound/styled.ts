import styled from "styled-components";


export const Container = styled.div`
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    width: 70vw;
    height: auto;
    justify-content: center;
    align-items: center;
    position: relative;

    a:first-child {
        top: 10vh;
        left: 15vw;
        margin: 0 auto;
        position: absolute;
        width: 50vw;
    }
    a:last-child {
        top: 20vh;
        left: 25vw;
        margin: 0 auto;
        width: 30vw;
        position: absolute;

    }

    `;
    
export const Button = styled.button`
    width: 50vw;
    height: 100px;
`