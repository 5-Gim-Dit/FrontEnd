import styled from "styled-components";
import { Header } from "../../components/header";
import { Table } from "../../components/table";

export const TablePage = () => {
    return (
        <Container>
            <Header />
            <Table />
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
