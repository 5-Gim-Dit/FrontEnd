import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import chevronDown from "../../../assets/svg/chevronDown.svg";

interface DropDownProps<T> {
    className?: string;
    value?: T;
    margin?: [number, number, number, number];
    width?: string;
    onChange: (value: T) => void;
    option: T[];
}

export const DropDown = <T extends string>({
    className,
    margin = [0, 0, 0, 0],
    option,
    value,
    onChange,
    width = "100%",
}: DropDownProps<T>) => {
    const [isopen, setIsopen] = useState<boolean>(false);
    const [data, setData] = useState<T>(value ? value : option[0]);
    const outsideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setData(value ? value : option[0]);
    }, [value, option]);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function handleClickOutside(event: any) {
            // 현재 document에서 mousedown 이벤트가 동작하면 호출되는 함수입니다.
            if (
                outsideRef.current &&
                !outsideRef.current.contains(event.target)
            ) {
                setIsopen(false);
            }
        }
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [outsideRef]);

    return (
        <_DropdownWrapper width={width} ref={outsideRef}>
            <_Selector
                className={className}
                onClick={() => {
                    setIsopen(!isopen);
                }}
                $margin={margin}
                width={width}
            >
                {data}
                <_Img $isopen={isopen}>
                    <img src={chevronDown} alt="" />
                </_Img>
            </_Selector>
            {isopen && option && option.length > 0 && (
                <_Items width={width} $isopen={isopen}>
                    {option
                        ?.filter((res) => data !== res)
                        .map((res, idx) => {
                            return option.length - 2 === idx ? (
                                <_Item
                                    key={idx}
                                    width={width}
                                    onClick={() => {
                                        setData(res);
                                        setIsopen(false);
                                        onChange(res);
                                    }}
                                >
                                    {res}
                                </_Item>
                            ) : (
                                <_Item
                                    key={idx}
                                    width={width}
                                    onClick={() => {
                                        setData(res);
                                        setIsopen(false);
                                        onChange(res);
                                    }}
                                >
                                    {res}
                                </_Item>
                            );
                        })}
                </_Items>
            )}
        </_DropdownWrapper>
    );
};

const _DropdownWrapper = styled.div<{ width?: string }>`
    position: relative;
    width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
`;

const _Selector = styled.div<{
    $margin: [number, number, number, number];
    width: string;
}>`
    position: relative;
    border-radius: 8px;
    background: #272631;
    padding: 0 16px;
    height: 52px;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 99;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    margin: ${({ $margin }) => $margin.join("px ")}px;
`;

const _Items = styled.div<{ width: string; $isopen?: boolean }>`
    position: absolute;
    width: ${({ width }) => width};
    margin-top: 50px;
    overflow: scroll;
    max-height: 180px;
    z-index: 100;
    top: 5px;
    background-color: #272631;
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    font-weight: 400;
    @keyframes dropdown {
        0% {
            max-height: 0px;
        }
        100% {
            max-height: 160px;
        }
    }
    animation: dropdown 0.4s ease;
`;

const _Item = styled.div<{ width: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width};
    height: 45px;
    color: gray;
    z-index: 1;
    &:hover {
        color: white;
        cursor: pointer;
    }
`;

const _Img = styled.div<{ $isopen?: boolean }>`
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    rotate: ${({ $isopen }) => ($isopen ? "180deg" : "0deg")};
    transition-duration: 0.2s;
`;
