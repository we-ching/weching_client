import styled from "styled-components";
    
export const ContentContainer = styled.div`
    padding-top: 10px;
    display: flex;
    gap: 20px 0px;
    flex-direction: column;
    align-items: center; 
`;

export const TitleBox = styled.h3`
    font-size: 23px;
    font-weight: bold;
`;

export const MenuBox = styled.div`
    position: relative;
    width: 90vw;
    max-width: 500px;
    height: 60px;
    display: flex;
    overflow:hidden;
    align-items: flex-start;
    padding: 17px 0 17px 20px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    text-overflow: clip;
    color: #444444;
    box-sizing: border-box;

    &:hover {
        height: auto;
    }

    a {
        display: contents;
    }
`;