import {
  EmployeeDepartment,
  EmployeeRole,
  EmployeeStatus,
} from '@src/shared/api/employee/enums';

export type EmployeeContacts = {
  phone: string;
  telegramUsername: string;
};

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string;
  role: EmployeeRole;
  status: EmployeeStatus;
  department: EmployeeDepartment;
  contacts: EmployeeContacts;
};

export type GetEmployeeFilters = Partial<
  Pick<Employee, 'role' | 'status' | 'department'>
> & {
  search?: string;
  page: number;
};
