import { StsBaseEntity } from '@/shared/entity/sts.base.entity';
export declare class StsLocationEntity extends StsBaseEntity {
    country: string;
    prov: string;
    city: string;
    district: string;
    uv: number;
    newUv: number;
    pv: number;
    createTime: Date;
    del: number;
}
