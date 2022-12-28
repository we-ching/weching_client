import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
    children: React.ReactNode;
}

export const SummitContainer = ({ children }: ContainerProps) => {
    return (
        <>
       <BackGround />
       <Wrapper>
            {children}
        </Wrapper>
        </>
    )
}

const BackGround = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: -100;
`;


const Wrapper = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.01);
`;