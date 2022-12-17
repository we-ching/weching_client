import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store/config';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const Board = () => {
  // useSelector 로 boardReducer 에 있는 inputData 값을 가져온다.
  const post = useTypedSelector((state) => {
    return state.post.contents;
  });

  return (
    <div>
      <h2>이어서 작성하기</h2>
      <div>{post}</div>
    </div>
  );
};

export default Board;
