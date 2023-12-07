export declare class BaseResponse {
    success: boolean;
    data: any;
    message?: string;
    statusCode?: number;
    static success(data: any): BaseResponse;
    static failed(message: string, statusCode?: number): BaseResponse;
}
export declare class BaseService {
    responseSuccess(data: any): BaseResponse;
    responseFailed(data: any): BaseResponse;
}
