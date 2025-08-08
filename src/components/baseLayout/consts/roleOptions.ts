import { EmployeeRole } from '@src/shared/api/employee/enums';

export const roleOptions: Option<EmployeeRole>[] = [
  {
    label: 'Team Lead',
    value: EmployeeRole.TEAM_LEAD,
  },
  {
    label: 'Developer',
    value: EmployeeRole.DEVELOPER,
  },
];
