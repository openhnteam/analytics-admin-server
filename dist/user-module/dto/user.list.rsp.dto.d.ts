export declare class UserListBaseDto {
    uv: number;
    newUv: number;
    backUv: number;
}
export declare class UserListItemRspDto extends UserListBaseDto {
    id: string;
}
export declare class UserListRspDto extends UserListBaseDto {
    list: UserListItemRspDto[];
}
