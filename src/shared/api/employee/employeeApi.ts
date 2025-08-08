import {
  Employee,
  EmployeeContacts,
  GetEmployeeFilters,
} from '@src/shared/api/employee/types';
import { SERVER_ENV } from '@src/shared/consts/env/serverEnv';
import { PaginatedResponse } from '@src/shared/utils/paginateItems';

export class EmployeeApi {
  private baseUrl = `${SERVER_ENV.BASE_URL}/api/employee`;

  public async getEmployees(
    filters: GetEmployeeFilters,
  ): Promise<PaginatedResponse<Employee>> {
    const params = new URLSearchParams();

    if (filters.role) params.append('role', filters.role);
    if (filters.status) params.append('status', filters.status);
    if (filters.department) params.append('department', filters.department);
    if (filters.search) params.append('search', filters.search);
    if (filters.page !== undefined) params.append('page', String(filters.page));

    const res = await fetch(`${this.baseUrl}?${params.toString()}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch employees: ${res.statusText}`);
    }

    const data: PaginatedResponse<Employee> = await res.json();

    return data;
  }

  public async getEmployee(id: number): Promise<Employee | null> {
    const res = await fetch(`${this.baseUrl}/${id}`);

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Failed to fetch employee with id ${id}`);

    const data: Employee = await res.json();
    return data;
  }

  public async updateEmployeeContacts(
    id: number,
    contacts: EmployeeContacts,
  ): Promise<boolean> {
    const res = await fetch(`${this.baseUrl}/${id}/contacts`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contacts),
    });

    if (!res.ok) {
      throw new Error(`Failed to update contacts for employee ${id}`);
    }

    return true;
  }
}

export const employeeApi = new EmployeeApi();
