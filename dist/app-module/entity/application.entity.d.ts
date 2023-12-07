import { BaseEntity } from 'typeorm';
export declare class ApplicationEntity extends BaseEntity {
    id: number;
    appId: string;
    name: string;
    type: number;
    salt: string;
    appKey: string;
    createTime: Date;
    job: number;
    del: number;
}
