import React, { ReactNode } from "react";
import styled from "styled-components";

interface propsType {
    width?: string;
    disabled?: boolean;
    icon?: string;
    margin?: [number, number, number, number];
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}

export default function Button({
    width = "100%",
    onClick,
    disabled = false,
    icon = "",
    margin = [0, 0, 0, 0],
    children,
}: propsType) {
    return (
        <BtnStyle
            onClick={onClick}
            width={width}
            disabled={disabled}
            $margin={margin}
        >
            {icon && <ImageStyle src={icon} alt="" />}
            {children}
        </BtnStyle>
    );
}

const BtnStyle = styled.button<{
    width: string;
    $margin: [number, number, number, number];
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    background-color: #333337;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    margin: ${({ $margin }) => $margin.join("px ")}px;
    cursor: pointer;
    padding: 8px 20px;
    gap: 8px;
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    &:hover {
        background: #484850;
    }
`;

const ImageStyle = styled.img`
    width: 16px;
    height: 16px;
`;
