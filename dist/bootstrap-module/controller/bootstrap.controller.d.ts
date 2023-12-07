import { BootstrapService } from '../service/bootstrap.service';
export declare class BootstrapController {
    readonly bootstrapService: BootstrapService;
    constructor(bootstrapService: BootstrapService);
    bootstrap(): Promise<void>;
}
