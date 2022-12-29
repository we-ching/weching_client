import * as S from './styled';
import { BookmarkContentType } from './Card';


interface Props {
    datas: BookmarkContentType[] | undefined;
}

export const CardList = (props: Props) => {
    
    const randomColor = (props: any) => {
        let color_r = Math.floor(Math.random() * (3600000 - props)/10000);
        return `${color_r}`;
    }
    const { datas } = props;
    return (
        <>
        <S.CardWrapper>
        <S.CardGrid>
            {datas && 
                datas.map((data) => (
                    <S.CardBox color={randomColor(data.post_id)} key={data.id}>
                        <p>{data.content}</p>
                    </S.CardBox>
                ))
            }
        </S.CardGrid>
        </S.CardWrapper>
        </>
    )
}