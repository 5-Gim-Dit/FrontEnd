import styled from "styled-components";
import Button from "../common/button";
import { Stack } from "../common/stack";
import plus from "../../assets/svg/plus.svg";
import { Pagination } from "../../utils/Pagination";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetTableList } from "../../apis/table";

export const TableList = () => {
    const navigator = useNavigate();
    const params = useParams();
    const [page, setPage] = useState(1);
    const { data } = useGetTableList(params.id!);
    const length = data?.data.length ? data?.data.length : 1;
    return (
        <Container>
            <Stack justify="space-between">
                <TitleText>📄 테이블 목록</TitleText>
                <Button
                    onClick={() => navigator(`/addTable/${params.id}`)}
                    icon={plus}
                >
                    추가
                </Button>
            </Stack>
            <ListWrapper>
                {data?.data
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((item, i) => {
                        return (
                            <Link to={`/table/${item.id}`} key={i}>
                                <Table key={i}>
                                    <Stack gap={33}>
                                        <TableText>
                                            {i + 1 + (page - 1) * 10}
                                        </TableText>
                                        <TableText>{item.name}</TableText>
                                    </Stack>
                                    <DateText>{item.createDate}</DateText>
                                </Table>
                            </Link>
                        );
                    })}
            </ListWrapper>
            <Pagination
                pageCount={Math.floor(length / 10 + 1)}
                page={page}
                setPage={setPage}
            />
        </Container>
    );
};

const Container = styled.div`
    width: 712px;
    height: 590px;
    display: flex;
    flex-direction: column;
    margin-top: 124px;
`;

const TitleText = styled.div`
    color: #fff;
    font-size: 28px;
    font-weight: 600;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 590px;
    margin-top: 28px;
    margin-bottom: 40px;
    overflow: scroll;
`;

const Table = styled.div`
    width: 712px;
    height: 59px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    font-size: 30px;
    padding: 0 16px;
    cursor: pointer;
    &:hover {
        background-color: rgba(255, 255, 255, 0.04);
    }
`;

const TableText = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: 400;
`;

const DateText = styled.div`
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    font-weight: 400;
`;
