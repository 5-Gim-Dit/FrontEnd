import { MutateOptions, useMutation } from "@tanstack/react-query";
import { instance } from "../axios";
import { columRequestsType } from "../table/type";

const router = "/column";

/** column 삭제 */
export const useDeleteColumn = (columnId: number, options: MutateOptions) => {
    return useMutation(async () => instance.delete(`${router}/${columnId}`), {
        ...options,
    });
};

/** 필드 생성 */
export const useAddField = (tableId: string, form: columRequestsType) => {
    return useMutation(
        async () =>
            instance.post(`${router}/by/${tableId}`, {
                name: form.name,
                type: form.type,
            }),
        {
            onSuccess: () => {
                alert("필드가 성공적으로 추가하였습니다.");
            },
            onError: () => {
                alert("필드 추가에 실패하였습니다.");
            },
        }
    );
};
