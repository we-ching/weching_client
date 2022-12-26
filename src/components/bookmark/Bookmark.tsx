import { CardList } from './CardList';
import * as S from './styled';
import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { BookmarkContentType } from './Card';


export const Bookmark = () => {
    const [datas, setDatas] = useState<BookmarkContentType[]>([]);

/**새로 짜는 중 */
    // const url = `https://port-0-weching-53px25lbvs1fg6.gksl2.cloudtype.app`;
    
    // const getAPI = async () => {
    //         const result = await axios.get(`/api/review/bookmark`, {
    //             headers: {
    //                 authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4LCJlbWFpbCI6ImVsaWNlMm5lMUBnbWFpbC5jb20iLCJzdGF0dXMiOjAsImlhdCI6MTY3MTc4MDcxMSwiZXhwIjoxNjcxODYzNTExfQ.xCjdyADnR3MuzukOyMOVle96c7OxL7Y48KXRuNAqguM'
    //             },
    //         });
    //         const bookmarkList = result.data;
    //         setDatas(() => [...datas, ...bookmarkList]);
    //     };
    //     useEffect(() => {
    //         getAPI();
    //     }, []);

    // return (
    //     <S.Container>
    //         <button onClick = {getAPI}>북마크 불러오기</button>
    //         <CardList datas={datas}/>
    //     </S.Container>
    // );

/**스타일 확인용 */
    const API_URL = `https://jsonplaceholder.typicode.com/todos`;

    useEffect(() => {
        if (datas.length) console.log(datas);
    }, [datas]);

    const getAPI = useCallback(
        async (e: { preventDefault: () => void; }) => {
            e.preventDefault();
            const result = await axios.get(API_URL);
            console.log("result.data: ", result.data.slice(0, 30));
            setDatas(result.data.slice(0,30));
        }, [API_URL]

        
    );
    return (
        <S.Container>
            <button onClick = {getAPI}>북마크 불러오기</button>
            <CardList datas={datas}/>
        </S.Container>
    )
};