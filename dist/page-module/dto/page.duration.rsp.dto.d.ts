export declare class PageDurationItemRspDto {
    page: string;
    pv: number;
    uv: number;
    pvFormat: string;
    uvFormat: string;
    duration: string;
}
export declare class PageDurationRspDto {
    count: number;
    list: PageDurationItemRspDto[];
}
