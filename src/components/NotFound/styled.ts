import styled from "styled-components";


export const Container = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: auto;
    justify-content: center;
    align-items: center;


    div:nth-child(2) {
        margin-top: 30px;
        height: 50vh !important;
        position: relative;
        opacity: 50%;
        filter: blur(3px);
    }
    div:nth-child(3) {
        margin-top: 30px;
        height: 50vh !important;
        position: absolute;
        margin-bottom: 100px;
    }
    `;
    
export const Button = styled.button`
    margin-top: 30px;
    width: 70vw;
    max-width: 250px;
    height: 70px;
    border: 1px solid #F2E1C2;
    border-radius: 10px;
    font-size: 22px;
    font-family: 'SeoulHangangM';
    color: white;
    background: #8C5C32;
`