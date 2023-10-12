import styled from "styled-components";
import kakao from "../../assets/svg/kakao.svg";
import { Stack } from "../common/stack";
import { Logo } from "../common/logo";

export const Login = () => {
    return (
        <Container>
            <Stack margin={[37, 0, 0, 0]} gap={10} align="center">
                <Logo size={36} />
                <ServiesText>ZARAY</ServiesText>
            </Stack>
            <ContentsText>AI를 통한 백엔드 노코딩 툴</ContentsText>
            <KakaoBtn
                onClick={() =>
                    (window.location.href = `${
                        import.meta.env.VITE_APP_BASE_URL
                    }/oauth2/authorization/kakao`)
                }
            >
                <KakaoImg src={kakao} alt="" />
                <KakaoText>Kakao 로그인</KakaoText>
            </KakaoBtn>
        </Container>
    );
};

const Container = styled.div`
    width: 440px;
    height: 287px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ServiesText = styled.div`
    font-size: 29px;
    font-weight: 700;
    color: white;
    display: flex;
    align-items: center;
    margin-bottom: -6px;
`;

const ContentsText = styled.div`
    color: rgba(255, 255, 255, 0.6);
    font-size: 18px;
    font-weight: 500;
    margin: 21px 0 56px 0;
`;

const KakaoBtn = styled.button`
    width: 372px;
    height: 59px;
    border: none;
    border-radius: 6px;
    background: #fee500;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const KakaoImg = styled.img`
    position: absolute;
    top: 12px;
    left: 35px;
`;

const KakaoText = styled.div`
    color: #0f0921;
    font-size: 20px;
    font-weight: 700;
`;