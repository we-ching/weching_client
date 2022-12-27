// dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// styles
import * as S from './styled';

interface ReportInfoType {
  id: string,
  type: string,
  type_id: string,
  content: string,
}

export function AdminReport() {
  const [reportInfo, setReportInfo] = useState<ReportInfoType[]>([]);

  const report = async () => {
    try { 
      const {reportType}: {reportType: ReportInfoType[]} = await axios.get(`/api/report?page=1`,
      ).then(res=> res.data)
      setReportInfo(reportType);

    } catch (err) {
      alert(`예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
    }
  };
  useEffect(() => {
    report();
  }, []);

  return (
    <S.Background>
      <S.Wrapper>
        <S.reportPageContainer>
          <S.reportTitleContainer>
            <S.reportTitle>신고 관리 페이지</S.reportTitle>    
          </S.reportTitleContainer>
          {
              Array.isArray(reportInfo) && reportInfo.length > 0 ? 
              reportInfo.map((item: ReportInfoType)=>
                <S.ItemBox>
                  <div className='reportInfo'>
                    <div className='type'>신고 타입: {item.type}</div>
                    <div className='typeId'>신고 게시물 ID: {item.type_id}</div>
                  </div>
                  <div className='content'>신고 내용: {item.content}</div>
                </S.ItemBox>
              )
              : <S.ItemBox>
                  <div className='none'>접수된 신고가 없습니다</div>
                </S.ItemBox>
            }
        </S.reportPageContainer>
      </S.Wrapper>
    </S.Background>
  );
};