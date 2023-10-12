import styled from "styled-components";

export const AddSpace = () => {
    return (
        <Container>
            <TitleText>스페이스 생성</TitleText>
            <ContentsText>생성할 스페이스의 이름을 입력해 주세요.</ContentsText>
            <Input placeholder="스페이스의 이름을 입력해 주세요." />
            <Btn>확인</Btn>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 240px;
    width: 376px;
    height: 309px;
    border-radius: 8px;
    background: #191824;
    display: flex;
    flex-direction: column;
    padding: 28px 28px 32px 28px;
`;

const TitleText = styled.div`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
`;

const ContentsText = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 24px;
`;

const Input = styled.input`
    width: 320px;
    height: 52px;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 0 16px;
    background: #272631;
    margin-bottom: 56px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    &:focus {
        border: 1px solid #2b78ff;
    }
`;

const Btn = styled.button`
    width: 320px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    background-color: linear-gradient(93deg, #3db9ff -27.49%, #2562ff 98.36%);
    &:disabled {
        background: #3a3945;
    }
`;
