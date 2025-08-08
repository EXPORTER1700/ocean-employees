'use client';

import { roleOptions } from '@src/components/baseLayout/consts/roleOptions';
import { EmployeeRole } from '@src/shared/api/employee/enums';
import { useUserRole } from '@src/shared/contexts/userRoleContext';
import { Select } from '@src/shared/ui/Select/Select';

export const RoleSelect = () => {
  const { setRole } = useUserRole();

  return (
    <Select
      defaultValue={EmployeeRole.TEAM_LEAD}
      options={roleOptions}
      onChange={(role) => setRole(role)}
    />
  );
};
