import { EmployeeProfile } from '@src/components/employee/EmployeeProfile/EmployeeProfile';
import { employeeApi } from '@src/shared/api/employee/employeeApi';

type EmployeePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EmployeePage(props: EmployeePageProps) {
  const { params } = props;

  const { id } = await params;

  try {
    const employee = await employeeApi.getEmployee(Number(id));

    if (!employee) {
      throw Error();
    }

    return <EmployeeProfile employee={employee} />;
  } catch (e) {
    console.error('Error on loading employee', { e });

    return <p>Employee not found :(</p>;
  }
}
