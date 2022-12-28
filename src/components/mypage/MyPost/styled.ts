import styled, { css, keyframes } from 'styled-components';
import reportBtn from '../../../assets/images/alert.png';
import bookBtn from '../../../assets/images/book.png';

export interface Post {
  id: number;
  userId: number;
  content: string;
  status: number;
  isChecked: number;
}
export interface Reviews {
  id: number;
  content: string;
  grade?: null;
  status: number;
}
export interface Posts {
  post: Post;
  reviews: Reviews[];
}

export interface reviewProp {
  isReviews?: boolean;
  key?: number;
  posts?: Posts[];
}

export interface reviewId {
  id?: any;
  isReported?: number;
  idx?: number;
}

export interface isError {
  isError: boolean;
  name: string;
  id: string;
  cols: number;
  rows: number;
  maxLength: number;
  placeholder: string;
}
export interface reprotBtn {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  name?: any;
}

export interface bool {
  onClick?: (e: any) => any;
  clicked?: any;
}

export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
  `;
export const flexColumCenter = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

export const Container = styled.div`
  ${flexCenter}
  width: 90vw;
  height: auto;
  margin: 0 auto;
  overflow: auto;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 400;
`;

export const PostCon = styled.div`
  ${flexCenter}
  justify-content: start;
  flex-direction: column;
  gap: 2rem;
  width: 80vw;
  min-height: 90vh;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const Post = styled.div<reviewProp>`
  position: relative;
  width: 80%;
  min-height: 100px;
  padding: 20px;
  z-index: 3;
  text-overflow: ellipsis;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  cursor: pointer;
  :hover {
    transform: translateY(2px);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  }
  border: 2px solid ${({ isReviews }) => (isReviews ? 'limegreen' : 'gray')};

  &::before {
    position: absolute;
    content: '';
    width: 30px;
    height: 30px;
    z-index: 1;
    bottom: -15px;
    border: 2px solid gray;
    background: none;
    transform: rotate(-45deg);
  }
`;

export const PostContent = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
/** Review
 * 별점, 북마크, 신고
 */
export const Review = styled.div<reviewId>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  ${({ isReported }) =>
    isReported === 1
      ? css`
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-inedx: 3;
            background-color: rgba(255, 255, 255, 0.8);
          }
        `
      : null}
`;

export const ReviewButtonStyle = styled.button<reprotBtn>`
  display: inline-block;
  width: 50px;
  height: 30px;
  bottom: 1rem;
  margin: 10px;
  background: none;
  border: 2px solid limegreen;
  border-radius: 8px;
  cursor: pointer;
`;

export const ReviewButtonBox = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ReviewCountBtnBox = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const shinyBtn = keyframes`
  0% { transform: scale(0) rotate(45deg); opacity: 0; }
    80% { transform: scale(0) rotate(45deg); opacity: 0.5; }
    81% { transform: scale(4) rotate(45deg); opacity: 1; }
    100% { transform: scale(50) rotate(45deg); opacity: 0; }
`;

export const ReviewCountBtn = styled.button`
  position: relative;
  display: inline-block;
  font-size: 8px;
  color: #fff;
  border: none;
  border-radius: 4px;
  background: none;
  &:not(:first-of-type) {
    margin-left: 10px;
  }
  background: linear-gradient(0deg, #bfa78a 0%, #bfa78a 100%);
  overflow: hidden;
  &::before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -180px;
    left: 0;
    width: 10px;
    height: 100%;
    background-color: #fff;
    animation: ${shinyBtn} 3s ease-in-out infinite;
  }
`;

export const ReviewReportBtn = styled.button``;

export const ReviewReportBtnImage = styled(ReviewButtonStyle)`
  background-image: url(${reportBtn});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  width: 50px;
  height: 30px;
`;

export const ReviewBookmarkBtn = styled(ReviewButtonStyle)`
  background-image: url(${bookBtn});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  width: 50px;
  height: 30px;
  margin-left: auto;
`;
/* Review Animation */

/* Ranking Point */
export const RP_Form = styled.form`
  display: inline-block;
  padding-left: 20px;
`;
export const RP_FiledSet = styled.fieldset`
  display: inline-block;
  direction: rtl;
  border: 0;
`;
export const RP_Label = styled.label`
  font-size: 1rem;
  color: transparent;
  text-shadow: 0 0 0 #f0f0f0;
  &:hover {
    text-shadow: 0 0 0 red;
  }
  &:hover ~ label {
    text-shadow: 0 0 0 red;
  }
`;
export const RP_Input = styled.input`
  &[type='radio'] {
    display: none;
  }
  &[type='radio']:checked ~ label {
    text-shadow: 0 0 0 red;
  }
`;
export const RP_SubmitBtn = styled(ReviewButtonStyle)`
  border: 2px solid #bfa78a;
`;
/** modal
 * 사용처 : 리뷰 신고버튼,
 */
export const M_Container = styled.div`
  position: fixed;
  ${flexCenter}
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
`;
export const M_Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
export const M_ModalBox = styled.div`
  ${flexCenter}
  width: 220px;
  height: 200px;
  padding: 2rem;
  text-align: center;
  z-index: 6;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;
export const M_Modal = styled.div`
  width: 100%;
  height: 100%;
`;
export const M_Form = styled.form`
  width: 100%;
  height: 100%;
`;
export const M_Fieldset = styled.fieldset`
  ${flexColumCenter}
  width: 100%;
  height: 100%;
`;
export const M_Legend = styled.legend`
  font-size: 1.5rem;
`;
export const M_Textarea = styled.textarea<isError>`
  margin-top: auto;

  border: 1.5px solid ${({ isError }) => (isError ? 'red' : 'unset')};
`;
export const M_TextLabel = styled.label`
  width: 100%;
  height: 1rem;
  padding: 5px;
  font-size: 0.8rem;
  color: red;
  line-height: 1rem;
`;
export const M_Button = styled.button`
  display: inline-block;
  margin-top: auto;
`;

/* media query */
// @media (min-width: 1024px) {
// 	width: 60vw;
//   margin: 0 auto;

// }
