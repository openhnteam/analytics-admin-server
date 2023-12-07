export declare class SessionListBaseDto {
    pv: number;
    newPv: number;
    uv: number;
    duration: number;
}
export declare class SessionListItemRspDto extends SessionListBaseDto {
    id: string;
}
export declare class SessionListRspDto extends SessionListBaseDto {
    list: SessionListItemRspDto[];
}
