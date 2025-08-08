'use client';

import { type FC } from 'react';
import clsx from 'clsx';

import classes from '@src/shared/ui/Pagination/Pagination.module.scss';

type PaginationProps = {
  className?: string;
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = (props) => {
  const { className, currentPage, totalPages, onChangePage } = props;

  const pages = Array.from({ length: totalPages });

  return (
    <ul className={clsx(className, classes.container)}>
      {pages.map((_, idx) => (
        <li
          key={idx}
          onClick={() => onChangePage(idx + 1)}
          className={clsx(classes.item, {
            [classes.active]: currentPage === idx + 1,
          })}
        >
          {idx + 1}
        </li>
      ))}
    </ul>
  );
};
