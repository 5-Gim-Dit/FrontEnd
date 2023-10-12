import styled from "styled-components";
import { Header } from "../../components/header";
import { SpaceList } from "../../components/spaceList";

export const SpaceListPage = () => {
    return (
        <Container>
            <Header />
            <SpaceList />
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
