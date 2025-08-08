import { NextRequest, NextResponse } from 'next/server';

import {
  EmployeeDepartment,
  EmployeeRole,
  EmployeeStatus,
} from '@src/shared/api/employee/enums';
import { Employee } from '@src/shared/api/employee/types';
import { employeesDataService } from '@src/shared/data/services/employeesDataService';
import { paginateItems } from '@src/shared/utils/paginateItems';

const ITEMS_PER_PAGE = 5;

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const role = searchParams.get('role') as EmployeeRole | null;
  const status = searchParams.get('status') as EmployeeStatus | null;
  const department = searchParams.get(
    'department',
  ) as EmployeeDepartment | null;
  const search = searchParams.get('search')?.toLowerCase() ?? '';
  const page = parseInt(searchParams.get('page') ?? '1');

  const filtered = employeesDataService.employees.reduce<Employee[]>(
    (acc, employee) => {
      const matchesRole = !role || employee.role === role;
      const matchesStatus = !status || employee.status === status;
      const matchesDepartment =
        !department || employee.department === department;
      const matchesSearch =
        !search ||
        `${employee.firstName} ${employee.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase());

      if (matchesRole && matchesStatus && matchesDepartment && matchesSearch) {
        acc.push(employee);
      }

      return acc;
    },
    [],
  );

  return NextResponse.json(paginateItems(filtered, ITEMS_PER_PAGE, page));
}
