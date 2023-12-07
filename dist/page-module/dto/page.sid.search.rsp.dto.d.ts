export declare class PagePathItemRspDto {
    page: string;
    pageUrl: string;
    visitTime: string;
    duration: number;
}
export declare class PageSidSearchItemRspDto {
    sid: string;
    userId: string;
    deviceNo: string;
    visitTime: string;
    totalDuration: number;
    pages: PagePathItemRspDto[];
}
export declare class pageSidSearchRspDto {
    count: number;
    list: PageSidSearchItemRspDto[];
}
