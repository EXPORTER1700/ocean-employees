import { TaskStatus } from '@src/shared/api/task/enums';

export type Task = {
  id: number;
  title: string;
  description: string;
  employeeId: number;
  status: TaskStatus;
};

export type GetEmployeeTasksParams = {
  page: number;
};
