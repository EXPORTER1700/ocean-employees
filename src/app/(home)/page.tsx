import classes from '@src/app/(home)/page.module.scss';
import { EmployeesFilters } from '@src/components/employees/EmployeesFilters/EmployeesFilters';
import { EmployeesPagination } from '@src/components/employees/EmployeesPagination/EmployeesPagination';
import { EmployeesTable } from '@src/components/employees/EmployeesTable/EmployeesTable';
import { employeeApi } from '@src/shared/api/employee/employeeApi';
import {
  EmployeeDepartment,
  EmployeeRole,
  EmployeeStatus,
} from '@src/shared/api/employee/enums';

type SearchParams = {
  page: string;
  search: string;
  role: EmployeeRole;
  department: EmployeeDepartment;
  status: EmployeeStatus;
};

type EmployeesPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function EmployeesPage(props: EmployeesPageProps) {
  const { searchParams } = props;

  const {
    page = '1',
    search = '',
    role,
    department,
    status,
  } = await searchParams;

  try {
    const { data: employees, totalPages } = await employeeApi.getEmployees({
      page: Number(page),
      search,
      status,
      department,
      role,
    });

    return (
      <div className={classes.container}>
        <EmployeesFilters />
        <div className={classes.tableWrapper}>
          <EmployeesTable employees={employees} />
        </div>
        <EmployeesPagination
          totalPages={totalPages}
          className={classes.pagination}
        />
      </div>
    );
  } catch (error) {
    console.error('Failed to load employees', error);

    return <p>Failed to load employees. Please try later.</p>;
  }
}
