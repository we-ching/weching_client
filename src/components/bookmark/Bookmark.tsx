import { CardList } from './CardList';
import * as S from './styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BookmarkContentType } from './Card';


export const Bookmark = () => {
    const [datas, setDatas] = useState<BookmarkContentType[]>([]);

    const dataRequest = async () => {
        try {
            const result = await axios.get(`/api/review/bookmark`, {
                headers: {
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3LCJlbWFpbCI6ImxrZzcwMDA3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTk1Nzk1LCJleHAiOjE2NzIyNzg1OTV9.jPVHM-PXjsFWqwT81Kjh0KRcLAJFJuce_vujYDwICWo'
                }
            });
            setDatas([...datas, ...result.data]);
        } catch (err) {
            alert(`1. 예기지 못한 에러가 발생했습니다.\nERROR: ${err}`);
        }
    };
    useEffect(() => {
        dataRequest();
    }, [])
    
    return (
        <S.Container>
            <CardList datas={datas}/>
        </S.Container>
    );
};