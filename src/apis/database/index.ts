import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { spaceResponse } from "./type";
import { useNavigate } from "react-router-dom";

const router = "/database";

/** 스페이스 목록 조회 */
export const useGetSpaceList = () => {
    return useQuery(["getSpaceList"], async () => {
        const { data } = await instance.get<spaceResponse>(`${router}/my`);
        return data;
    });
};

/** 스페이스 추가 */
export const useAddSpace = (name: string) => {
    const navigator = useNavigate();
    return useMutation(async () => instance.post(`${router}`, { name: name }), {
        onSuccess: () => {
            alert("스페이스를 성공적으로 추가하였습니다.");
            navigator("/spaceList");
        },
        onError: () => {
            alert("스페이스 추가에 실패하였습니다.");
        },
    });
};
