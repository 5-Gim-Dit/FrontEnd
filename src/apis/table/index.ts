import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../axios";
import { columnType, formType, tableResponse } from "./type";
import { useNavigate, useParams } from "react-router-dom";

const router = "/table";

/** 스페이스 목록 조회 */
export const useGetTableList = (databaseId: string) => {
    return useQuery(["getTableList", databaseId], async () => {
        const { data } = await instance.get<tableResponse>(
            `${router}/by/${databaseId}`
        );
        return data;
    });
};

/** 스페이스 목록 조회 */
export const useGetTableColumns = (tableId: string) => {
    return useQuery(["getTableColumns", tableId], async () => {
        const { data } = await instance.get<columnType>(`${router}/${tableId}`);
        return data;
    });
};

/** 테이블 생성 */
export const useAddTable = (databaseId: string, form: formType) => {
    const navigator = useNavigate();
    const params = useParams();
    return useMutation(
        async () => instance.post(`${router}/${databaseId}`, form),
        {
            onSuccess: () => {
                alert("테이블을 성공적으로 추가하였습니다.");
                navigator(`/TableList/${params.id}`);
            },
            onError: () => {
                alert("테이블 추가에 실패하였습니다.");
            },
        }
    );
};
