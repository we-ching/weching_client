import { Dispatch, SetStateAction } from 'react';
import * as S from './styled';

interface pageNumberProps {
  totalPage: number;
  changePage: Dispatch<SetStateAction<number>>;
}

export const PageNumber = ({
  totalPage,
  changePage,
}: pageNumberProps): JSX.Element => {
  return (
    <S.PageNumberNav>
      {Array(totalPage)
        .fill(0)
        .map((_, i) => {
          return (
            <S.pageNumberBtn key={i + 1} onClick={() => changePage(i + 1)}>
              {i + 1}
            </S.pageNumberBtn>
          );
        })}
    </S.PageNumberNav>
  );
};
