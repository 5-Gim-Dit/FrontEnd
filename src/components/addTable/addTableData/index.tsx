import styled from "styled-components";
import { Stack } from "../../common/stack";
import { DropDown } from "../../common/dropdown";
import dataImg from "../../../assets/svg/data.svg";
import { Dispatch, SetStateAction } from "react";
import { columRequestsType, formType } from "../../../apis/table/type";
import { useForm } from "../../../hooks/useForm";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useParams } from "react-router-dom";
import { useAddTable } from "../../../apis/table";

interface propsType {
    setForm: Dispatch<SetStateAction<formType>>;
    form: formType;
}

export const AddTableData = ({ setForm, form }: propsType) => {
    const {
        form: data,
        setForm: setData,
        handleChange: dataHandleChange,
    } = useForm<columRequestsType>({
        name: "",
        type: "STRING",
    });

    const params = useParams();
    const { mutate } = useAddTable(params.id!, form);

    const AddData = () => {
        setForm((prev) => ({
            ...prev,
            columRequests: [...prev.columRequests, data],
        }));
        setTimeout(() =>
            setData({
                name: "",
                type: "STRING",
            })
        );
    };

    const reorderArray = (
        list: columRequestsType[],
        startIndex: number,
        endIndex: number
    ) => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onDragEnd = (result: any) => {
        if (!result.destination) {
            return;
        }
        setForm((prev) => ({
            ...prev,
            columRequests: reorderArray(
                prev.columRequests,
                result.source.index,
                result.destination.index
            ),
        }));
    };

    return (
        <AddWrapper>
            <Stack justify="space-between">
                <TitleText>상세입력</TitleText>
                <Stack gap={8}>
                    <Cercle
                        style={{ backgroundColor: "rgba(48, 47, 60, 1)" }}
                    />
                    <Cercle />
                </Stack>
            </Stack>
            <Stack gap={28}>
                <Stack direction="column">
                    <ContentsText>
                        생성할 속성의 이름과 타입을 입력해 주세요.
                    </ContentsText>
                    <Stack direction="column" gap={12}>
                        <Stack gap={8}>
                            <Input
                                placeholder="이름을 입력해주세요."
                                name="name"
                                value={data.name}
                                onChange={dataHandleChange}
                            />
                            <DropDown
                                width="112px"
                                value={data.type}
                                option={["STRING", "NUMBER", "BOOLEAN"]}
                                onChange={(e) =>
                                    setData((prev) => ({ ...prev, type: e }))
                                }
                            />
                        </Stack>
                        <AddBtn
                            disabled={!data.name || !data.type}
                            onClick={AddData}
                        >
                            +
                        </AddBtn>
                    </Stack>
                    <OkayBtn
                        onClick={() => {
                            mutate();
                        }}
                        disabled={!form.tableName || !form.columRequests.length}
                    >
                        확인
                    </OkayBtn>
                </Stack>
                <Stack
                    direction="column"
                    gap={12}
                    height={238}
                    overflow="scroll"
                >
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {form.columRequests.map((item, index) => (
                                        <Draggable
                                            key={`item${index}`}
                                            draggableId={`item-${index}`}
                                            index={index}
                                        >
                                            {(provided, snapshot) => (
                                                <DataBox
                                                    isDragging={
                                                        snapshot.isDragging
                                                    }
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <img src={dataImg} alt="" />
                                                    <ItemText>
                                                        {item.name}, {item.type}
                                                    </ItemText>
                                                </DataBox>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </Stack>
            </Stack>
        </AddWrapper>
    );
};

const AddWrapper = styled.div`
    margin-top: 240px;
    width: 676px;
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
    background-image: linear-gradient(93deg, #3db9ff -27.49%, #2562ff 98.36%);
    cursor: pointer;
    &:disabled {
        background: #3a3945;
        cursor: not-allowed;
        &:hover {
            background: #3a3945;
        }
    }
    &:hover {
        background: rgba(43, 117, 255, 0.6);
    }
`;

const OkayBtn = styled.button`
    width: 320px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    background-image: linear-gradient(93deg, #3db9ff -27.49%, #2562ff 98.36%);
    cursor: pointer;
    &:disabled {
        background: #3a3945;
    }
`;

const DataBox = styled.div<{ isDragging: boolean }>`
    width: 272px;
    height: 40px;
    display: flex;
    align-content: center;
    border-radius: 8px;
    background: #272631;
    padding: 12px 12px;
    margin-bottom: 12px;
    gap: 15px;
    border: 1px solid
        ${({ isDragging }) =>
            isDragging ? "var(--primary, #2B78FF);" : "#272631"};
`;

const ItemText = styled.div`
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    font-weight: 400;
`;
