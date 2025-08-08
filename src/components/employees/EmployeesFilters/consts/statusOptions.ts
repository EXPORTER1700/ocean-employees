import { EmployeeStatus } from '@src/shared/api/employee/enums';
import { employeeStatusLabels } from '@src/shared/consts/labels/employeeStatusLabels';

export const statusOptions: Option<EmployeeStatus>[] = [
  { label: 'All', value: '' as unknown as EmployeeStatus },
  {
    label: employeeStatusLabels[EmployeeStatus.ACTIVE],
    value: EmployeeStatus.ACTIVE,
  },
  {
    label: employeeStatusLabels[EmployeeStatus.INACTIVE],
    value: EmployeeStatus.INACTIVE,
  },
];
