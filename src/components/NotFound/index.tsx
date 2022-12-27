import Lottie from 'lottie-react';
import {blob, err404} from '../../assets/images';
import * as S from './styled';

import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/home');
  };

  return (
    <S.Container>
      <div>요청하신 페이지를 찾을 수 없습니다.
        <a>
        <Lottie animationData={blob}/>
        </a>
        <a>
        <Lottie animationData={err404}/>
        </a>
      </div>
      
      <S.Button onClick={navigateHome}>홈으로가기</S.Button>
    </S.Container>
  );
};
