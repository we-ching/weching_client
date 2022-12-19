import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/home');
  };

  return (
    <>
      <div>요청하신 페이지를 찾을 수 없습니다.</div>
      <button onClick={navigateHome}>홈으로가기</button>
    </>
  );
};
