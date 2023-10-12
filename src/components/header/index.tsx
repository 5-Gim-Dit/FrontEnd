import styled from "styled-components";
import { Logo } from "../common/logo";
import { Stack } from "../common/stack";
import Button from "../common/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
    const navigator = useNavigate();
    const location = useLocation();
    return (
        <Container>
            <Link to="/">
                <Stack
                    align="center"
                    gap={4}
                    margin={[23, 237, 0, 0]}
                    height={26}
                >
                    <Logo size={32} />
                    <ServiesText>Zaray</ServiesText>
                </Stack>
            </Link>
            {!location.pathname.includes("spaceList") && (
                <ContentText
                    onClick={() => {
                        navigator("/spaceList");
                    }}
                >
                    스페이스
                </ContentText>
            )}
            <Button
                onClick={() => {
                    navigator("/");
                }}
                width="49px"
                margin={
                    location.pathname.includes("spaceList")
                        ? [18, 0, 18, 300]
                        : [18, 0, 18, 237]
                }
            >
                로그아웃
            </Button>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 72px;
    display: flex;
    position: fixed;
    top: 0;
    justify-content: center;
    background-color: #0f0921;
`;

const ServiesText = styled.div`
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    margin-top: 3px;
`;

const ContentText = styled.div`
    height: 27px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-top: 25px;
    cursor: pointer;
    &:hover {
        text-align: center;
        &:after {
            content: "";
            display: block;
            width: 16px;
            border-bottom: 3px solid #2b75ff;
            padding-bottom: 4px;
            margin: 0 auto;
        }
    }
`;
