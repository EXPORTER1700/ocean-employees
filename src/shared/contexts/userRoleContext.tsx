'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { EmployeeRole } from '@src/shared/api/employee/enums';

type UserRoleContextType = {
  role: EmployeeRole;
  setRole: (role: EmployeeRole) => void;
};

const UserRoleContext = createContext<UserRoleContextType | undefined>(
  undefined,
);

export const UserRoleContextProvider = (props: PropsWithChildren) => {
  const [role, setRole] = useState<EmployeeRole>(EmployeeRole.TEAM_LEAD);

  return (
    <UserRoleContext.Provider
      value={{
        role,
        setRole,
      }}
    >
      {props.children}
    </UserRoleContext.Provider>
  );
};

export const useUserRole = () => {
  const context = useContext(UserRoleContext);

  if (context === undefined) {
    throw new Error(
      'useUserRole must be used within a UserRoleContextProvider',
    );
  }

  return context;
};
