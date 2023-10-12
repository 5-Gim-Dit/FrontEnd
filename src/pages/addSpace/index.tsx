import styled from "styled-components";
import { Header } from "../../components/header";
import { AddSpace } from "../../components/addSpace";

export const AddSpacePage = () => {
    return (
        <Container>
            <Header />
            <AddSpace />
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
