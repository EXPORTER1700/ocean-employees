export type PaginatedResponse<T> = {
  data: T[];
  totalPages: number;
};

export const paginateItems = <T>(
  data: T[],
  limit: number,
  currentPage: number,
): PaginatedResponse<T> => {
  const safeLimit = Math.max(1, limit);
  const safePage = Math.max(1, currentPage);
  const offset = (safePage - 1) * safeLimit;

  return {
    data: data.slice(offset, offset + safeLimit),
    totalPages: Math.ceil(data.length / safeLimit),
  };
};
