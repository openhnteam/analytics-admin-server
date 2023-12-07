import { JobService } from '../service/job.service';
export declare class JobController {
    readonly jobService: JobService;
    constructor(jobService: JobService);
    start(): Promise<any>;
}
