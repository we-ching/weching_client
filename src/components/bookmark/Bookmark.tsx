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
                    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJlbWFpbCI6ImNvc2loaDU1QGdtYWlsLmNvbSIsInN0YXR1cyI6MCwiaWF0IjoxNjcyMTIxMDI1LCJleHAiOjE2NzIyMDM4MjV9.tUlbd1u6OPI0eK8c2YbKFaCKwdjolzJqx3pIdMwAm1c'
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