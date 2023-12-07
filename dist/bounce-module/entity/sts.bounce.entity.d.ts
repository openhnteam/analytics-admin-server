import { StsBaseEntity } from '@/shared/entity/sts.base.entity';
export declare class StsPageBounceEntity extends StsBaseEntity {
    name: string;
    uv: number;
    newUv: number;
    pv: number;
    bounce: number;
    createTime: Date;
    del: number;
}
