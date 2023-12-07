import { StsBaseEntity } from '@/shared/entity/sts.base.entity';
export declare class StsEventSegmentEntity extends StsBaseEntity {
    eventId: string;
    segId: string;
    segValue: string;
    pv: number;
    uv: number;
    newUv: number;
}
