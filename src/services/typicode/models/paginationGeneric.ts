export type PaginationGeneric<ResultModel> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: ResultModel[];
};
