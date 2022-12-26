import React from 'react';
import { Card } from './Card';
import * as S from './styled';
import { BookmarkContentType } from './Card';

interface Props {
    datas: BookmarkContentType[] | undefined;
}

export const CardList = (props: Props) => {
    const { datas } = props;

    return (
        <>
        <S.CardWrapper>
        <S.CardGrid>
            {datas && 
                datas.map((data) => (
                    <S.CardBox key={data.id}>
                        <p>userId: {data.id}</p>
                        <p>content: {data.content}</p>
                    </S.CardBox>
                ))
            }
        </S.CardGrid>
        </S.CardWrapper>
        </>
    )
}