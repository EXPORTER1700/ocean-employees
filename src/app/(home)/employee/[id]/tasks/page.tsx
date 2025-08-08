import { TasksBoard } from '@src/components/tasks/TasksBoard/TasksBoard';
import { taskApi } from '@src/shared/api/task/taskApi';

type EmployeeTasksPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EmployeeTasksPage(props: EmployeeTasksPageProps) {
  const { id } = await props.params;

  try {
    const tasks = await taskApi.getEmployeeTasks(Number(id));

    return <TasksBoard initialTasks={tasks} />;
  } catch (e) {
    console.error('Error on loading tasks', { e });
    return <p>Error on loading tasks :(</p>;
  }
}
