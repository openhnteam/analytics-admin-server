export interface SessionRangeInterface {
    id: string;
    start: number;
    end: number;
}
export declare const SESSION_RANHE_LIST: SessionRangeInterface[];
export declare const SESSION_FREQUENCY_DAY = "\nWHEN pv BETWEEN 1 AND 2 THEN '1-2\u6B21'\nWHEN pv BETWEEN 3 AND 5 THEN '3-5\u6B21'\nWHEN pv BETWEEN 6 AND 9 THEN '6-9\u6B21'\nWHEN pv BETWEEN 10 AND 19 THEN '10-19\u6B21'\nWHEN pv BETWEEN 20 AND 49 THEN '20-49\u6B21'\nELSE '50+\u6B21'\n";
export declare const SESSION_FREQUENCY_WEEK = "\nWHEN pv BETWEEN 1 AND 2 THEN '1-2\u6B21'\nWHEN pv BETWEEN 3 AND 5 THEN '3-5\u6B21'\nWHEN pv BETWEEN 6 AND 9 THEN '6-9\u6B21'\nWHEN pv BETWEEN 10 AND 19 THEN '10-19\u6B21'\nWHEN pv BETWEEN 20 AND 49 THEN '20-49\u6B21'\nWHEN pv BETWEEN 50 AND 99 THEN '50-99\u6B21'\nELSE '100+\u6B21'\n";
export declare const SESSION_FREQUENCY_MONTH = "\nWHEN pv BETWEEN 1 AND 2 THEN '1-2\u6B21'\nWHEN pv BETWEEN 3 AND 5 THEN '3-5\u6B21'\nWHEN pv BETWEEN 6 AND 9 THEN '6-9\u6B21'\nWHEN pv BETWEEN 10 AND 19 THEN '10-19\u6B21'\nWHEN pv BETWEEN 20 AND 49 THEN '20-49\u6B21'\nWHEN pv BETWEEN 50 AND 99 THEN '50-99\u6B21'\nWHEN pv BETWEEN 100 AND 199 THEN '100-199\u6B21'\nWHEN pv BETWEEN 200 AND 299 THEN '200-299\u6B21'\nELSE '300+\u6B21'\n";
export declare const SESSION_FREQUENCY_QUARTER = "\nWHEN pv BETWEEN 1 AND 2 THEN '1-2\u6B21'\nWHEN pv BETWEEN 3 AND 5 THEN '3-5\u6B21'\nWHEN pv BETWEEN 6 AND 9 THEN '6-9\u6B21'\nWHEN pv BETWEEN 10 AND 19 THEN '10-19\u6B21'\nWHEN pv BETWEEN 20 AND 49 THEN '20-49\u6B21'\nWHEN pv BETWEEN 50 AND 99 THEN '50-99\u6B21'\nWHEN pv BETWEEN 100 AND 199 THEN '100-199\u6B21'\nWHEN pv BETWEEN 200 AND 299 THEN '200-299\u6B21'\nWHEN pv BETWEEN 300 AND 399 THEN '300-399\u6B21'\nWHEN pv BETWEEN 400 AND 499 THEN '400-499\u6B21'\nELSE '500+\u6B21'\n";
