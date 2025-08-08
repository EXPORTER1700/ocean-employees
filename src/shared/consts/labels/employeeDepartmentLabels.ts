import { EmployeeDepartment } from '@src/shared/api/employee/enums';

export const employeeDepartmentLabels: Record<EmployeeDepartment, string> = {
  [EmployeeDepartment.SALES]: 'Sales',
  [EmployeeDepartment.TECH]: 'Tech',
  [EmployeeDepartment.FINANCE]: 'Finance',
};
