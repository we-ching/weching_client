import React from 'react';
import { Card } from './Card';
import * as S from './styled';

interface BookmarkContent {
    id: number,
    user_id: number,
    post_id: number,
    content: string,
    bookmark: boolean,
}

const sampleC:BookmarkContent = {
    id: 1,
    user_id: 2,
    post_id: 3,
    content: 'testtest',
    bookmark: true,
}

export const CardList = (sampleC: BookmarkContent) => {
    return (
        <>
        <S.CardWrapper>
        <S.CardGrid>
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        <Card id={sampleC.id} user_id={sampleC.user_id} post_id={sampleC.post_id} content={sampleC.content} bookmark={sampleC.bookmark} />
        {/* <Card article={sampleC} /> */}
        </S.CardGrid>
        </S.CardWrapper>
        </>
    )
}