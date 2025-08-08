import { NextRequest, NextResponse } from 'next/server';

import { TaskStatus } from '@src/shared/api/task/enums';
import { tasksDataService } from '@src/shared/data/services/tasksDataService';

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const awaitedParams = await params;

  const taskId = parseInt(awaitedParams.id, 10);
  if (isNaN(taskId)) {
    return NextResponse.json({ error: 'Invalid task ID' }, { status: 400 });
  }

  let body: { status?: TaskStatus };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { status } = body;
  if (!status || !Object.values(TaskStatus).includes(status as TaskStatus)) {
    return NextResponse.json(
      { error: 'Invalid or missing status' },
      { status: 400 },
    );
  }

  const taskIndex = tasksDataService.tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) {
    return NextResponse.json({ error: 'Task not found' }, { status: 404 });
  }

  const updatedTask = { ...tasksDataService.tasks[taskIndex], status };
  tasksDataService.tasks[taskIndex] = updatedTask;

  await tasksDataService.updateTask(updatedTask);

  return NextResponse.json({ success: true });
}
