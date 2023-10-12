export interface tableResponse {
    data: tableListType[];
}

export interface tableListType {
    createDate: string;
    databaseId: number;
    id: number;
    name: string;
}

export interface formType {
    tableName: string;
    columRequests: columRequestsType[];
}

export interface columRequestsType {
    name: string;
    type: string;
}

export interface columnType {
    columns: { id: number; name: string; type: string; tableId: number }[];
    table: { id: number; name: string; databaseId: number; createDate: string };
}
