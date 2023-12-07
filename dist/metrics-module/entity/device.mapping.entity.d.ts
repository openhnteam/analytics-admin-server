import { BaseEntity } from 'typeorm';
export declare class DeviceMappingEntity extends BaseEntity {
    id: number;
    device: string;
    name: string;
    vendor: string;
    del: number;
}
