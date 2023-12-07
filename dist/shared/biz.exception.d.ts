import { HttpException, HttpStatus } from '@nestjs/common';
import { BizStatus } from './constants/biz.constant';
export declare class BizException extends HttpException {
    private errorResponse;
    private errorCode;
    constructor(errorResponse: string | Record<string, any>, errorCode?: HttpStatus | BizStatus);
    getErrorResponse(): string | Record<string, any>;
    getErrorCode(): number;
}
