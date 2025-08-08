import { EmployeeRole } from '@src/shared/api/employee/enums';
import { employeeRoleLabels } from '@src/shared/consts/labels/employeeRoleLabels';

export const roleOptions: Option<EmployeeRole>[] = [
  { label: 'All', value: '' as unknown as EmployeeRole },
  {
    label: employeeRoleLabels[EmployeeRole.DEVELOPER],
    value: EmployeeRole.DEVELOPER,
  },
  {
    label: employeeRoleLabels[EmployeeRole.TEAM_LEAD],
    value: EmployeeRole.TEAM_LEAD,
  },
];
