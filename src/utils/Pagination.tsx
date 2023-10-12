import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import chevronRight from "../assets/svg/chevronRight.svg";

interface PropsType {
    pageCount: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
}

/** 페이지네이션을 구현한 함수입니다. */
export function Pagination({ pageCount, page, setPage }: PropsType) {
    const changePageNumber = (num: number) => {
        setPage(num);
    };
    return (
        <Nav>
            <Img
                src={chevronRight}
                alt=""
                onClick={() => page !== 1 && changePageNumber(page - 1)}
                disabled={page === 1}
                style={{ transform: "rotateY( 180deg )" }}
            />
            {Array.from({ length: pageCount }, (_, i) => (
                <Text
                    key={i + 1}
                    onClick={() => changePageNumber(i + 1)}
                    $focus={page === i + 1}
                >
                    {i + 1}
                </Text>
            ))}
            <Img
                src={chevronRight}
                alt=""
                onClick={() => pageCount !== page && changePageNumber(page + 1)}
                disabled={pageCount === page}
            />
        </Nav>
    );
}

const Text = styled.div<{ $focus: boolean }>`
    font-size: 16px;
    font-weight: 600;
    color: ${({ $focus }) => ($focus ? "#fff" : "#9E9E9E")};
    cursor: pointer;
    &:hover {
        cursor: ${({ $focus }) => ($focus ? "not-allowed" : "pointer")};
        text-decoration: ${({ $focus }) => ($focus ? "none" : "underline")};
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 25px;
`;

const Img = styled.img<{ disabled: boolean }>`
    filter: ${({ disabled }) =>
        disabled ? "#cccccc" : "rgba(255, 255, 255, 0.2)"};
    background-color: transparent;
    font-weight: 400;
    font-size: 20px;
	margin-top: -3px;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    &:hover {
        filter: rgba(255, 255, 255, 0.5);
    }
`;
