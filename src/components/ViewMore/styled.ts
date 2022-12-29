import styled from 'styled-components';

export const BackGround = styled.div`
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
  background: #f0f0f0;
`;

export const MenuContainer = styled.ul`
  padding-top: 70px;
  display: flex;
  gap: 20px 0px;
  flex-direction: column;
  align-items: center;
`;

export const MenuBox = styled.li`
  position: relative;
  width: 90vw;
  max-width: 750px;
  height: 60px;
  display: flex;

  align-items: center;
  padding-left: 20px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #444444;
  cursor: pointer;
`;
