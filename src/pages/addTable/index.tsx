import styled from "styled-components";
import { Header } from "../../components/header";
import { AddTableName } from "../../components/addTable/addTableName";
import { AddTableData } from "../../components/addTable/addTableData";
import { useState } from "react";

export const AddTablePage = () => {
    const [next, setNext] = useState(1);
    return (
        <Container>
            <Header />
            {next === 1 ? <AddTableName setNext={setNext} /> : <AddTableData />}
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
