import { PropsWithChildren } from 'react';

import classes from '@src/app/(home)/employee/[id]/layout.module.scss';
import { EmployeeTabs } from '@src/components/employee/EmployeeTabs/EmployeeTabs';

export default function EmployeeLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className={classes.container}>
      <EmployeeTabs />
      {children}
    </div>
  );
}
