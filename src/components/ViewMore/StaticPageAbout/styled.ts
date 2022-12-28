import styled from "styled-components";

const customMediaQuery = (maxWidth: number) => 
    `@media (max-width: ${maxWidth}px)`;
const media = {
    mobile: customMediaQuery(1024),
    };

export const BackGround = styled.body`
    position: relative;
    width: 100vw;
    max-width: 1024px;
    height: 100vh;
    margin: 0 auto;
    background: #F0F0F0;
    
    ${media.mobile} {
        
}
`;
    
export const ContentContainer = styled.div`
    padding-top: 70px;
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
    width: 372px;
    height: auto;
    display: flex;
    
    align-items: center;
    padding: 15px;
    background: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #444444;
    box-sizing: border-box;

`;