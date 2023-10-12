import styled from "styled-components";
import { Stack } from "../../common/stack";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { formType } from "../../../apis/table/type";

interface propsType {
    setNext: Dispatch<SetStateAction<number>>;
    form: formType;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

export const AddTableName = ({ setNext, form, handleChange }: propsType) => {
    return (
        <Container>
            <Stack justify="space-between">
                <TitleText>테이블 생성</TitleText>
                <Stack gap={8}>
                    <Cercle />
                    <Cercle
                        style={{ backgroundColor: "rgba(48, 47, 60, 1)" }}
                    />
                </Stack>
            </Stack>
            <ContentsText>생성할 테이블의 이름을 입력해 주세요.</ContentsText>
            <Input
                placeholder="테이블의 이름을 입력해 주세요."
                value={form.tableName}
                name="tableName"
                onChange={handleChange}
            />
            <Btn disabled={!form.tableName} onClick={() => setNext(2)}>
                다음
            </Btn>
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
    width: 320px;
    height: 52px;
    border-radius: 4px;
    border: 1px solid #272631;
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
    border: none;
    border-radius: 4px;
    background-image: linear-gradient(93deg, #3db9ff -27.49%, #2562ff 98.36%);
    cursor: pointer;
    &:disabled {
        background: #3a3945;
    }
`;
