import { Employee } from '@src/shared/api/employee/types';
import employees from '@src/shared/data/json/employees.json';

class EmployeesDataService {
  private _employees = employees as Employee[];

  public get employees() {
    return this._employees;
  }

  public async updateEmployee(employee: Employee) {
    this._employees = this._employees.map((item) =>
      item.id === employee.id ? employee : item,
    );
  }
}

export const employeesDataService = new EmployeesDataService();
