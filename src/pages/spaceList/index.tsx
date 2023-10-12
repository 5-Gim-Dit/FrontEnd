import styled from "styled-components";
import { Header } from "../../components/header";
import { SpaceList } from "../../components/spaceList";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const SpaceListPage = () => {
    const location = useLocation();
    const [, setCookies, removeCookies] = useCookies();

    useEffect(() => {
        if (location.pathname === "/callback") {
            removeCookies("access_token");
            setCookies(
                "access_token",
                location.search.replace("?accessToken=", "")
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
