export interface spaceResponse {
    data: spaceListType[];
}

export interface spaceListType {
    id: number;
    name: string;
    memberId: number;
}
