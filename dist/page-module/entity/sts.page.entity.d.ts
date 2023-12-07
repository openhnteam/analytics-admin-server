import { StsBaseEntity } from '@/shared/entity/sts.base.entity';
export declare class StsPageEntity extends StsBaseEntity {
    name: string;
    uv: number;
    newUv: number;
    pv: number;
    totalDuration: number;
    avgDuration: number;
    createTime: Date;
    del: number;
}
