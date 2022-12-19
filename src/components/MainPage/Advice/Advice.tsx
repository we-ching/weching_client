import * as s from '../styled';

import Present from '../../../assets/images/Rectangle-1.png';

function Advice() {
  return (
    <div>
      <s.Advice>
        <s.AdviceTitle>한 줄 명언</s.AdviceTitle>
        <s.Image src={Present} />
        <s.AdviceContent>상자를 눌러보세요!</s.AdviceContent>
      </s.Advice>
    </div>
  );
}

export default Advice;
