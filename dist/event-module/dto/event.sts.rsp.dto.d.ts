import { StsUvAndPvRspDto } from "@/shared/dto/sts.uv.pv.rsp.dto";
export declare class EventStsListRspDto extends StsUvAndPvRspDto {
    id: string;
}
export declare class EventStsRspDto extends StsUvAndPvRspDto {
    eventId: string;
    list: StsUvAndPvRspDto[];
}
