import { BaseEntity } from 'typeorm';
export declare class AccountEntity extends BaseEntity {
    id: number;
    userName: string;
    password: string;
    admin: number;
    createTime: Date;
    updatedTime: Date;
    del: number;
}
