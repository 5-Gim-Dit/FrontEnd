import { useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { rowType } from "./type";

const router = "/value";

/** 스페이스 목록 조회 */
export const useGetTableData = (tableId: string) => {
    return useQuery(["getTableData", tableId], async () => {
        const { data } = await instance.get<rowType>(`${router}/by/${tableId}`);
        return data;
    });
};
