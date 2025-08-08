import { NextRequest, NextResponse } from 'next/server';

import { EmployeeContacts } from '@src/shared/api/employee/types';
import { employeesDataService } from '@src/shared/data/services/employeesDataService';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const awaitedParams = await params;

  const id = parseInt(awaitedParams.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid employee ID' }, { status: 400 });
  }

  let contacts: EmployeeContacts;
  try {
    contacts = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const employee = employeesDataService.employees.find((e) => e.id === id);

  if (!employee) {
    return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
  }

  const updatedEmployee = { ...employee, contacts };

  await employeesDataService.updateEmployee(updatedEmployee);

  return NextResponse.json({ success: true });
}
