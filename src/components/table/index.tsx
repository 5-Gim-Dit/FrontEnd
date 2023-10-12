import styled from "styled-components";
import { Stack } from "../common/stack";
import Button from "../common/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import plus from "../../assets/svg/plus.svg";

type myObject = {
    [key: string]: number;
};

export const Table = () => {
    const navigator = useNavigate();
    const [isEdit, setIsEdit] = useState(false);
    const a: myObject[] = [
        { key1: 1, key2: 1, key3: 1 },
        { key1: 1, key2: 1, key3: 1 },
        { key1: 1, key2: 1, key3: 1 },
        { key1: 1, key2: 1, key3: 1 },
        { key1: 1, key2: 1, key3: 1 },
        { key1: 1, key2: 1, key3: 1 },
        { key1: 1, key2: 1, key3: 1 },
        { key1: 1, key2: 1, key3: 1 },
    ];
    const keys = Object.keys(a[0]);
    return (
        <Container>
            <Stack justify="space-between">
                <TitleText>📄 테이블</TitleText>
                <Button
                    onClick={() => {
                        setIsEdit((prev) => !prev);
                    }}
                >
                    {isEdit ? "완료" : "수정"}
                </Button>
            </Stack>
            <Stack
                direction="column"
                gap={12}
                width="676px"
                height={600}
                overflow="scroll"
            >
                <Stack gap={12} width={`${(keys.length + 1) * 172 - 12}px`}>
                    <Square />
                    {keys.map((item, i) => {
                        return (
                            <HeaderCell
                                key={i}
                                onClick={() => navigator("/tableList")}
                            >
                                {item}
                            </HeaderCell>
                        );
                    })}
                </Stack>
                {a.map((item, i) => {
                    return (
                        <Stack
                            gap={12}
                            key={i}
                            width={`${(keys.length + 1) * 172 - 12}px`}
                        >
                            <BodyCell>#{i + 1}</BodyCell>
                            {keys.map((key, i) => {
                                return (
                                    <BodyCell
                                        key={i}
                                        style={{
                                            background:
                                                "rgba(255, 255, 255, 0.08)",
                                        }}
                                    >
                                        {item[key]}
                                    </BodyCell>
                                );
                            })}
                        </Stack>
                    );
                })}
            </Stack>
            {isEdit && (
                <>
                    <AddField
                        height={
                            (a.length + 1) * 68 - 12 < 600
                                ? (a.length + 1) * 68 - 12
                                : 600
                        }
                        style={{
                            left: `${
                                (keys.length + 1) * 172 + 8 < 696
                                    ? (keys.length + 1) * 172 + 8
                                    : 696
                            }px`,
                            top: "64px",
                        }}
                    >
                        <img src={plus} alt="" />
                    </AddField>
                    <AddMethod
                        width={
                            (keys.length + 1) * 172 - 12 < 676
                                ? (keys.length + 1) * 172 - 12
                                : 676
                        }
                        style={{
                            left: "0px",
                            top: `${
                                (a.length + 1) * 68 + 72 < 665
                                    ? (a.length + 1) * 68 + 72
                                    : 685
                            }px`,
                        }}
                    >
                        <img src={plus} alt="" />
                    </AddMethod>
                </>
            )}
        </Container>
    );
};

const Container = styled.div`
    position: relative;
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

const Square = styled.div`
    width: 0;
    height: 0;
    border-bottom: 28px solid rgba(255, 255, 255, 0.4);
    border-top: 28px solid #2b75ff;
    border-left: 80px solid rgba(255, 255, 255, 0.4);
    border-right: 80px solid #2b75ff;
    border-radius: 4px;
`;

const HeaderCell = styled.div`
    width: 160px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #2b75ff;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
`;

const BodyCell = styled.div`
    width: 160px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.4);
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;

const AddField = styled.div<{ height: number }>`
    position: absolute;
    display: flex;
    width: 32px;
    height: ${({ height }) => height}px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.12);
`;

const AddMethod = styled.div<{ width: number }>`
    position: absolute;
    display: flex;
    width: ${({ width }) => width}px;
    height: 32px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.12);
`;
