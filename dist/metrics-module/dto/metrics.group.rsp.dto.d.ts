import { StsUvAndPvRspDto } from '@/shared/dto/sts.uv.pv.rsp.dto';
export declare class MetricsGroupListItemRspDto extends StsUvAndPvRspDto {
    id: string;
    key?: string;
    vendor?: string;
    mapping?: boolean;
}
export declare class MetricsGroupRspDto extends StsUvAndPvRspDto {
    list: MetricsGroupListItemRspDto[];
    count: number;
}
