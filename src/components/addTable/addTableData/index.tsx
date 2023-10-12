import styled from "styled-components";
import { Stack } from "../../common/stack";
import { DropDown } from "../../common/dropdown";

export const AddTableData = () => {
    return (
        <Container>
            <Stack justify="space-between">
                <TitleText>상세입력</TitleText>
                <Stack gap={8}>
                    <Cercle
                        style={{ backgroundColor: "rgba(48, 47, 60, 1)" }}
                    />
                    <Cercle />
                </Stack>
            </Stack>
            <ContentsText>
                생성할 속성의 이름과 타입을 입력해 주세요.
            </ContentsText>
            <Stack direction="column" gap={12}>
                <Stack gap={8}>
                    <Input placeholder="이름을 입력해주세요." />
                    <DropDown
                        width="112px"
                        option={["String", "Number", "Boolean"]}
                        onChange={() => {}}
                    />
                </Stack>
                <AddBtn>+</AddBtn>
            </Stack>
            <OkayBtn>확인</OkayBtn>
        </Container>
    );
};

const Container = styled.div`
    margin-top: 240px;
    width: 376px;
    height: 357px;
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

const Cercle = styled.div`
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color: rgba(43, 120, 255, 1);
`;

const ContentsText = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 24px;
`;

const Input = styled.input`
    width: 200px;
    height: 52px;
    border-radius: 4px;
    border: 1px solid #272631;
    outline: none;
    padding: 0 16px;
    background: #272631;
    color: white;
    font-size: 14px;
    font-weight: 400;
    &:focus {
        border: 1px solid #2b78ff;
    }
`;

const AddBtn = styled.button`
    width: 320px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 20px;
    font-weight: 300;
    border: none;
    border-radius: 6px;
    background: rgba(43, 117, 255, 0.2);
    margin-bottom: 48px;
    background-color: linear-gradient(93deg, #3db9ff -27.49%, #2562ff 98.36%);
    cursor: pointer;
    &:disabled {
        background: #3a3945;
    }
    &:hover {
        background: rgba(43, 117, 255, 0.6);
    }
`;

const OkayBtn = styled.button`
    width: 320px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    background-color: linear-gradient(93deg, #3db9ff -27.49%, #2562ff 98.36%);
    cursor: pointer;
    &:disabled {
        background: #3a3945;
    }
`;
