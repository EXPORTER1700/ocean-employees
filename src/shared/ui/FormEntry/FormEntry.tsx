import { type FC, ReactNode } from 'react';
import clsx from 'clsx';

import classes from '@src/shared/ui/FormEntry/FormEntry.module.scss';

type FormEntryProps = {
  className?: string;
  children: ReactNode;
  label: string;
};

export const FormEntry: FC<FormEntryProps> = (props) => {
  const { className, label, children } = props;

  return (
    <div className={clsx(className, classes.container)}>
      <span className={classes.label}>{label}</span>
      {children}
    </div>
  );
};
