import { EmployeeStatus } from '@src/shared/api/employee/enums';

export const employeeStatusLabels: Record<EmployeeStatus, string> = {
  [EmployeeStatus.ACTIVE]: 'Active',
  [EmployeeStatus.INACTIVE]: 'Inactive',
};
