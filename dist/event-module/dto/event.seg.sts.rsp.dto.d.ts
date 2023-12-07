import { StsUvAndPvRspDto } from "@/shared/dto/sts.uv.pv.rsp.dto";
export declare class EventSegStsItemRspDto extends StsUvAndPvRspDto {
    id: string;
    uvFormat: string;
    pvFormat: string;
    newUvFormat: string;
    avg: number;
}
export declare class EventSegStsRspDto extends StsUvAndPvRspDto {
    count: number;
    list: EventSegStsItemRspDto[];
}
