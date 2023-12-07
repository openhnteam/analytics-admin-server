import { BaseEntity } from 'typeorm';
export declare class EventSegInfoEntity extends BaseEntity {
    id: string;
    appId: string;
    eventId: string;
    segId: string;
    segName: string;
    segStatus: number;
    createTime: Date;
    updateTime: Date;
    del: number;
}
