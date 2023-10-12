import styled from "styled-components";
import { Stack } from "../common/stack";
import Button from "../common/button";
import plus from "../../assets/svg/plus.svg";
import { Logo } from "../common/logo";
import { useNavigate } from "react-router-dom";
import { useGetSpaceList } from "../../apis/database";

export const SpaceList = () => {
    const navigator = useNavigate();
    const { data } = useGetSpaceList();

    return (
        <Container>
            <Stack justify="space-between">
                <TitleText>📄 스페이스 목록</TitleText>
                <Button
                    onClick={() => {
                        navigator("/addSpace");
                    }}
                    icon={plus}
                >
                    추가
                </Button>
            </Stack>
            <ListWrapper>
                {data?.data.map((item, i) => {
                    return (
                        <Space
                            key={i}
                            onClick={async () => {
                                navigator(`/tableList/${item.id}`);
                            }}
                        >
                            <Profile>
                                <Logo size={46} />
                            </Profile>
                            <SpaceText>{item.name}</SpaceText>
                        </Space>
                    );
                })}
            </ListWrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 712px;
    height: 674px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 31px;
    margin-top: 124px;
`;

const TitleText = styled.div`
    color: #fff;
    font-size: 28px;
    font-weight: 600;
`;

const ListWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 600px;
    overflow: scroll;
    grid-row-gap: 20px;
    grid-column-gap: 17px;
`;

const Space = styled.div`
    width: 226px;
    height: 272px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.04);
    font-size: 30px;
    &:hover {
        background: rgba(255, 255, 255, 0.12);
    }
`;

const Profile = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-color: rgba(25, 24, 36, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    margin: 40px 0 28px 0;
`;

const SpaceText = styled.div`
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    width: 133px;
`;
