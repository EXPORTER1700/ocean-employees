import { NextRequest, NextResponse } from 'next/server';

import { employeesDataService } from '@src/shared/data/services/employeesDataService';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const awaitedParams = await params;

  const id = parseInt(awaitedParams.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const employee = employeesDataService.employees.find((e) => e.id === id);

  if (!employee) {
    return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
  }

  return NextResponse.json(employee);
}
