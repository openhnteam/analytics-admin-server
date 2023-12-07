import { StsBaseEntity } from '@/shared/entity/sts.base.entity';
export declare class StsSessionEntity extends StsBaseEntity {
    pv: number;
    newPv: number;
    duration: number;
    durationAvg: number;
    total: number;
}
