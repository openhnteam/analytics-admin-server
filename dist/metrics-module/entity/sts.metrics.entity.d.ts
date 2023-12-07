import { StsBaseEntity } from '@/shared/entity/sts.base.entity';
export declare class StsMetricsEntity extends StsBaseEntity {
    metrics_type: string;
    value: string;
    newUv: number;
    uv: number;
    pv: number;
    total: number;
    create_time: Date;
    del: number;
}
