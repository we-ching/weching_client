import { CardList } from './CardList';
import * as S from './styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BookmarkContentType } from './Card';
import { getCookie } from './../Login/GoogleBtn';

export const Bookmark = () => {
    const [datas, setDatas] = useState<BookmarkContentType[]>([]);
    const Cookies = getCookie('accessToken');
    const dataRequest = async () => {
        try {
            const result = await axios.get(`/api/review/bookmark`, {
                headers: {
                    authorization: `Bearer ${Cookies}`
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