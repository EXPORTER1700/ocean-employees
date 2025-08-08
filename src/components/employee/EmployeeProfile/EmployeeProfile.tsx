import { FC } from 'react';
import Image from 'next/image';

import { EditContactsButton } from '@src/components/employee/EditContactsButton/EditContactsButton';
import classes from '@src/components/employee/EmployeeProfile/EmployeeProfile.module.scss';
import { Employee } from '@src/shared/api/employee/types';
import { employeeDepartmentLabels } from '@src/shared/consts/labels/employeeDepartmentLabels';
import { employeeRoleLabels } from '@src/shared/consts/labels/employeeRoleLabels';
import { employeeStatusLabels } from '@src/shared/consts/labels/employeeStatusLabels';

type EmployeeProfileProps = {
  employee: Employee;
};

export const EmployeeProfile: FC<EmployeeProfileProps> = (props) => {
  const { employee } = props;

  return (
    <div className={classes.container}>
      <h2 className={classes.heading}>Profile</h2>

      <div className={classes.info}>
        <Image src={employee.avatar} alt={'Avatar'} width={150} height={150} />

        <div className={classes.column}>
          <span className={classes.text}>
            Name: {employee.firstName} {employee.lastName}
          </span>
          <span className={classes.text}>
            Role: {employeeRoleLabels[employee.role]}
          </span>
          <span className={classes.text}>
            Department: {employeeDepartmentLabels[employee.department]}
          </span>
          <span className={classes.text}>
            Status: {employeeStatusLabels[employee.status]}
          </span>
        </div>
      </div>

      <div className={classes.row}>
        <h2 className={classes.heading}>Contacts</h2>
        <EditContactsButton employee={employee} />
      </div>

      <div className={classes.column}>
        <span className={classes.text}>Phone: {employee.contacts.phone}</span>
        <span className={classes.text}>
          Telegram: {employee.contacts.telegramUsername}
        </span>
      </div>
    </div>
  );
};
