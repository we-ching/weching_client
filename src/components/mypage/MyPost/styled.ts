import styled from 'styled-components';

export interface Post {
  id: number;
  user_id: number;
  content: string;
  status: number;
}
export interface Reviews {
  id: number;
  content: string;
  grade: null;
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

export const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export const Container = styled.div`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
  background: rgba(217, 217, 217, 0.5);
  backdrop-filter: blur(15px);
  overflow: auto;
`;

export const Title = styled.p`
  font-size: 2rem;
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
  width: 80%;
  min-height: 100px;
  padding: 20px;
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

export const Review = styled.div`
  width: 80%;
  min-height: 100px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;
