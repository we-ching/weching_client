import styled from 'styled-components';




export const NavBottomContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100vw;
    min-width: 200px;
    max-width: 1024px;
    height: 75px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #F2F2F2;

    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 40px 40px 0px 0px;
`;

// <{ isSelected: boolean }>
export const NavMenuBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    margin: 0 auto;
    cursor: pointer;
    box-sizing: border-box;
    border: 0;

    &:nth-child(3) {
        padding-bottom: 20px;
        display: inline;
        
    }
`;