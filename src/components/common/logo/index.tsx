import styled from "styled-components";
import logo from "/logo.svg";

interface propType {
    size: number;
}

export const Logo = ({ size }: propType) => {
    return <LogoStyle src={logo} size={size} />;
};

const LogoStyle = styled.img<{ size: number }>`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`;
