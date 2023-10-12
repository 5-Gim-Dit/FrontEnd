import styled from "styled-components";
import { Header } from "../../components/header";
import { TableList } from "../../components/tableList";

export const TableListPage = () => {
    return (
        <Container>
            <Header />
            <TableList />
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
