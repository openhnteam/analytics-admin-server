import { BaseEntity } from 'typeorm';
export declare class JobEntity extends BaseEntity {
    id: number;
    appId: string;
    date: Date;
    createTime: Date;
    del: number;
}
