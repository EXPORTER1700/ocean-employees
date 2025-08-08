import { EmployeeDepartment } from '@src/shared/api/employee/enums';
import { employeeDepartmentLabels } from '@src/shared/consts/labels/employeeDepartmentLabels';
import { Option } from '@src/shared/types/common/option';

export const departmentOptions: Option<EmployeeDepartment>[] = [
  { label: 'All', value: '' as unknown as EmployeeDepartment },
  {
    label: employeeDepartmentLabels[EmployeeDepartment.SALES],
    value: EmployeeDepartment.SALES,
  },
  {
    label: employeeDepartmentLabels[EmployeeDepartment.FINANCE],
    value: EmployeeDepartment.FINANCE,
  },
  {
    label: employeeDepartmentLabels[EmployeeDepartment.TECH],
    value: EmployeeDepartment.TECH,
  },
];
