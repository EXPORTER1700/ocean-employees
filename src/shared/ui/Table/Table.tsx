import { ReactNode } from 'react';
import clsx from 'clsx';

import classes from '@src/shared/ui/Table/Table.module.scss';

type TableProps<T extends object> = {
  className?: string;
  data: T[];
  renderRow: (data: T, idx: number) => ReactNode;
  labels: string[];
};

export const Table = <T extends object>(props: TableProps<T>) => {
  const { className, data, labels, renderRow } = props;

  return (
    <table className={clsx(className, classes.table)}>
      <thead>
        <tr>
          {labels.map((label) => (
            <th key={label}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item, idx) => renderRow(item, idx))}</tbody>
    </table>
  );
};
