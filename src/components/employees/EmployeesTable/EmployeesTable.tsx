'use client';

import { type FC } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { EMPLOYEES_TABLE_LABELS } from '@src/components/employees/EmployeesTable/consts/employeesTableLabels';
import classes from '@src/components/employees/EmployeesTable/EmployeesTable.module.scss';
import { Employee } from '@src/shared/api/employee/types';
import { employeeDepartmentLabels } from '@src/shared/consts/labels/employeeDepartmentLabels';
import { employeeRoleLabels } from '@src/shared/consts/labels/employeeRoleLabels';
import { employeeStatusLabels } from '@src/shared/consts/labels/employeeStatusLabels';
import { Routes } from '@src/shared/routes/routes';
import { Table } from '@src/shared/ui/Table/Table';
import { route } from '@src/shared/utils/route';

type EmployeesProps = {
  employees: Employee[];
  className?: string;
};

export const EmployeesTable: FC<EmployeesProps> = (props) => {
  const { className, employees } = props;

  const router = useRouter();

  const handleEmployeeClick = (employee: Employee) => {
    router.push(route(Routes.EMPLOYEE, { id: employee.id }));
  };

  return (
    <Table
      className={className}
      data={employees}
      renderRow={(employee) => (
        <tr
          onClick={() => handleEmployeeClick(employee)}
          className={classes.row}
          key={employee.id}
        >
          <td>
            <Image
              src={employee.avatar}
              alt={'Avatar'}
              width={30}
              height={30}
            />
          </td>
          <td>
            {employee.firstName} {employee.lastName}
          </td>
          <td>{employeeRoleLabels[employee.role]}</td>
          <td>{employeeStatusLabels[employee.status]}</td>
          <td>{employeeDepartmentLabels[employee.department]}</td>
        </tr>
      )}
      labels={EMPLOYEES_TABLE_LABELS}
    />
  );
};
