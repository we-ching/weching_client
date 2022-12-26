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
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI2LCJlbWFpbCI6Inlvb25zMTAwNDU3QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMDM4NzcxLCJleHAiOjE2NzIxMjE1NzF9.ebVKU839fzrTHgcptdRjkrWZRmJjV1Kgh8NZi6jXOIc'
                }
            });
            setDatas([...datas, ...result.data]);
        } catch (err) {
            alert (`안댐 ${err}`);
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