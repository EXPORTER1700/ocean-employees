import { TaskStatus } from '@src/shared/api/task/enums';
import { Task } from '@src/shared/api/task/types';
import { SERVER_ENV } from '@src/shared/consts/env/serverEnv';

export class TaskApi {
  private baseUrl = `${SERVER_ENV.BASE_URL}/api/task`;

  public async getEmployeeTasks(id: number): Promise<Task[]> {
    const res = await fetch(`${this.baseUrl}/employee/${id}`);

    if (!res.ok) throw new Error(`Failed to fetch tasks for employee ${id}`);

    const data: Task[] = await res.json();

    return data;
  }

  public async changeTaskStatus(
    id: number,
    status: TaskStatus,
  ): Promise<boolean> {
    const res = await fetch(`${this.baseUrl}/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) {
      throw new Error(`Failed to update status for task ${id}`);
    }

    return true;
  }
}

export const taskApi = new TaskApi();
