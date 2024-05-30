export type PaginatedResponse<T> = {
  limit: number;
  offset: number;
  total: number;
  data: T[];
};
