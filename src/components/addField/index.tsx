/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import x from "../../assets/svg/x.svg";
import { Stack } from "../common/stack";
import { DropDown } from "../common/dropdown";
import { useForm } from "../../hooks/useForm";
import { columRequestsType } from "../../apis/table/type";
import { useParams } from "react-router-dom";
import { useAddField } from "../../apis/column";

interface propType {
    onClick: () => void;
    refetch: any;
}

export const AddFieldModal = ({ refetch, onClick }: propType) => {
    const {
        form: data,
        setForm: setData,
        handleChange: dataHandleChange,
    } = useForm<columRequestsType>({
        name: "",
        type: "STRING",
    });
    const params = useParams();
    const { mutate } = useAddField(params.id!, data);

    return (
        <Wrapper>
            <Stack justify="space-between" width="304px">
                <TitleText>이름 입력</TitleText>
                <XText src={x} onClick={onClick} />
            </Stack>
            <Stack gap={8} margin={[12, 0, 36, 0]}>
                <Input
                    placeholder="필드의 이름을 입력해주세요."
                    value={data.name}
                    name="name"
                    onChange={dataHandleChange}
                />
                <DropDown
                    width="112px"
                    value={data.type}
                    option={["STRING", "NUMBER", "BOOLEAN"]}
                    onChange={(e) => setData((prev) => ({ ...prev, type: e }))}
                />
            </Stack>
            <Btn
                disabled={!data.name || !data.type}
                onClick={() => {
                    mutate();
                    onClick();
                    setTimeout(refetch);
                }}
            >
                확인
            </Btn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 352px;
    height: 226px;
    border-radius: 8px;
    background: #31303c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 26px;
`;

const TitleText = styled.div`
    color: #fff;
    font-size: 18px;
    font-weight: 600;
`;

const XText = styled.img`
    width: 12px;
    height: 12px;
    cursor: pointer;
`;

const Input = styled.input`
    width: 200px;
    height: 52px;
    border-radius: 4px;
    border: none;
    outline: none;
    padding: 0 16px;
    background: #272631;
    color: white;
    font-size: 14px;
    font-weight: 400;
    border: 1px solid #272631;
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
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    background-image: linear-gradient(93deg, #3db9ff -27.49%, #2562ff 98.36%);
    cursor: pointer;
    &:disabled {
        background: #3a3945;
        cursor: not-allowed;
    }
`;
