import { EmployeeRole } from '@src/shared/api/employee/enums';
import { Option } from '@src/shared/types/common/option';

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
