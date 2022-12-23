import { Dispatch, SetStateAction } from 'react';

interface pageNumberProps {
  totalPage: number;
  changePage: Dispatch<SetStateAction<number>>;
}

export const PageNumber = ({
  totalPage,
  changePage,
}: pageNumberProps): JSX.Element => {
  return (
    <nav>
      {Array(totalPage)
        .fill(0)
        .map((_, i) => {
          return (
            <button key={i + 1} onClick={() => changePage(i + 1)}>
              {i + 1}
            </button>
          );
        })}
    </nav>
  );
};
