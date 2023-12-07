export declare class BounceListItemRspDto {
    page: string;
    pv: number;
    uv: number;
    pvFormat: string;
    uvFormat: string;
    bounce: string;
}
export declare class BounceListRspDto {
    count: number;
    list: BounceListItemRspDto[];
}
