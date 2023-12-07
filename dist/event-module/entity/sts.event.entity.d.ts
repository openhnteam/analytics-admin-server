import { StsBaseEntity } from '@/shared/entity/sts.base.entity';
export declare class StsEventEntity extends StsBaseEntity {
    eventId: string;
    pv: number;
    uv: number;
    newUv: number;
}
