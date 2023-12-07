import { BaseEntity } from 'typeorm';
import { StsTaskDto } from '../dto/sts.task.dto';
export declare class StsBaseEntity extends BaseEntity {
    id: number;
    appId: string;
    year: number;
    type: number;
    idx: number;
    startTime: Date;
    endTime: Date;
    del: number;
    constructor(task?: StsTaskDto);
}
