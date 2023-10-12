import styled from "styled-components";
import { Login } from "../../components/login";

export const LoginPage = () => {
    return (
        <Container>
            <Login /> 
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
