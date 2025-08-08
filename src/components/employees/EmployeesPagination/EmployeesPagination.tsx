'use client';

import { type FC } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { SearchParamsKeys } from '@src/shared/enums/searchParamsKeys';
import { Pagination } from '@src/shared/ui/Pagination/Pagination';

type EmployeesPaginationProps = {
  className?: string;
  totalPages: number;
};

export const EmployeesPagination: FC<EmployeesPaginationProps> = (props) => {
  const { className, totalPages } = props;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(SearchParamsKeys.PAGE, String(page));

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      className={className}
      currentPage={parseInt(searchParams.get(SearchParamsKeys.PAGE) || '1')}
      totalPages={totalPages}
      onChangePage={handleChangePage}
    />
  );
};
