import styled from "styled-components";
import { Stack } from "../common/stack";
import Button from "../common/button";
import { useParams } from "react-router-dom";
import { useState } from "react";
import plus from "../../assets/svg/plus.svg";
import { useGetTableData } from "../../apis/value";
import { useGetTableColumns } from "../../apis/table";
import deleteImg from "../../assets/svg/delete.svg";
import { useDeleteColumn } from "../../apis/column";
import { AddFieldModal } from "../addField";

export const Table = () => {
    const params = useParams();
    const [isEdit, setIsEdit] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [columnId, setColumnId] = useState(0);
    const { data: columns, refetch: columnsRefetch } = useGetTableColumns(
        params.id!
    );
    const columnsLength = columns?.columns.length ? columns?.columns.length : 0;
    const { data: rows, refetch: rowsRefetch } = useGetTableData(params.id!);
    const rowsLength = rows?.rows.length ? rows?.rows.length : 0;
    const { mutate } = useDeleteColumn(columnId, {
        onSuccess: () => {
            columnsRefetch();
            rowsRefetch();
        },
        onError: () => {
            alert("컬럼 삭제에 실패하였습니다.");
        },
    });

    return (
        <>
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
                    width="712px"
                    height={600}
                    overflow="scroll"
                >
                    <Stack
                        gap={12}
                        width={`${(columnsLength + 1) * 172 - 12}px`}
                    >
                        <Square />
                        {columns?.columns.map((item, i) => {
                            return (
                                <>
                                    <HeaderCell key={i}>
                                        {item.name}
                                        <DeleteImg
                                            src={deleteImg}
                                            alt=""
                                            onClick={() => {
                                                setColumnId(item.id);
                                                setTimeout(() => {
                                                    mutate();
                                                });
                                            }}
                                        />
                                    </HeaderCell>
                                </>
                            );
                        })}
                    </Stack>
                    {rows?.rows.map((item, i) => {
                        return (
                            <Stack
                                gap={12}
                                key={i}
                                width={`${(columnsLength + 1) * 172 - 12}px`}
                                position="relative"
                            >
                                <BodyCell>#{i + 1}</BodyCell>
                                {columns?.columns.map((_key, i) => {
                                    return (
                                        <BodyCell
                                            key={i}
                                            style={{
                                                background:
                                                    "rgba(255, 255, 255, 0.08)",
                                            }}
                                        >
                                            {item.values[i]}
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
                                rowsLength * 68 - 12 < 600
                                    ? (rowsLength + 1) * 68 - 12
                                    : 600
                            }
                            style={{
                                left: `${
                                    (columnsLength + 1) * 172 + 16 < 732
                                        ? (columnsLength + 1) * 172 + 16
                                        : 732
                                }px`,
                                top: "64px",
                            }}
                            onClick={() => setIsModal(true)}
                        >
                            <img src={plus} alt="" />
                        </AddField>
                    </>
                )}
            </Container>
            {isModal && (
                <Containers>
                    <AddFieldModal
                        refetch={columnsRefetch}
                        onClick={() => {
                            setIsModal(false);
                        }}
                    />
                </Containers>
            )}
        </>
    );
};

const Containers = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

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
    position: relative;
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
    &:hover {
        background: #2b75ffce;
    }
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
    &:hover {
        background: rgba(255, 255, 255, 0.24);
    }
`;

const DeleteImg = styled.img`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    opacity: 0;
    &:hover {
        opacity: 1;
        transition: 0.5s;
        outline: none;
    }
`;
