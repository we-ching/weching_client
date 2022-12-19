import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store/config';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const Board = () => {
  // useSelector 로 boardReducer 에 있는 inputData 값을 가져온다.
  const post = useTypedSelector((state) => {
    return state.post.contents;
  });

  return (
    <div>
      <h2>내가 쓴 글</h2>
      <div>{post}</div>
    </div>
  );
};
