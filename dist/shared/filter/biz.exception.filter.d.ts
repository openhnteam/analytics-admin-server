import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { BizException } from '../biz.exception';
export declare class BizExceptionFilter implements ExceptionFilter {
    catch(exception: BizException, host: ArgumentsHost): void;
}
