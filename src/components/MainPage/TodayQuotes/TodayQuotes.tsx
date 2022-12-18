import React from 'react';
import * as s from '../styled';

import Present from '../../../assets/images/Rectangle-1.png';

function TodayQuotes() {
  return (
    <div>
      <s.TodayQuotes>
        <s.TodayQuotesTitle>오늘의 명언</s.TodayQuotesTitle>
        <s.Image src={Present} />
        <s.TodayQuotesContent>상자를 눌러보세요!</s.TodayQuotesContent>
      </s.TodayQuotes>
    </div>
  );
}

export default TodayQuotes;
