import { Task } from '@src/shared/api/task/types';
import tasks from '@src/shared/data/json/tasks.json';

class TasksDataService {
  private _tasks = tasks as Task[];

  public get tasks() {
    return this._tasks;
  }

  public async updateTask(task: Task) {
    this._tasks = this._tasks.map((item) =>
      item.id === task.id ? task : item,
    );
  }
}

export const tasksDataService = new TasksDataService();
