import { EmployeeRole } from '@src/shared/api/employee/enums';

export const employeeRoleLabels: Record<EmployeeRole, string> = {
  [EmployeeRole.DEVELOPER]: 'Developer',
  [EmployeeRole.TEAM_LEAD]: 'Team Lead',
};
