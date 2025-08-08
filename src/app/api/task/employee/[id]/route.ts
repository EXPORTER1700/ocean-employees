import { NextRequest, NextResponse } from 'next/server';

import { tasksDataService } from '@src/shared/data/services/tasksDataService';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const awaitedParams = await params;

  const employeeId = parseInt(awaitedParams.id, 10);
  if (isNaN(employeeId)) {
    return NextResponse.json({ error: 'Invalid employee ID' }, { status: 400 });
  }

  const employeeTasks = tasksDataService.tasks.filter(
    (t) => t.employeeId === employeeId,
  );

  return NextResponse.json(employeeTasks);
}
