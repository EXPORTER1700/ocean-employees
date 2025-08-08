'use client';

import React, { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { BoardColumn } from '@src/components/tasks/BoardColumn/BoardColumn';
import classes from '@src/components/tasks/TasksBoard/TasksBoard.module.scss';
import { TaskStatus } from '@src/shared/api/task/enums';
import { taskApi } from '@src/shared/api/task/taskApi';
import { Task } from '@src/shared/api/task/types';
import { taskStatusLabels } from '@src/shared/consts/labels/taskStatusLabels';

type TasksBoardProps = {
  initialTasks: Task[];
};

export const TasksBoard: FC<TasksBoardProps> = ({ initialTasks = [] }) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const router = useRouter();

  const handleTaskDrop = async (taskId: number, newStatus: TaskStatus) => {
    const task = tasks.find((t) => t.id === taskId);
    if (!task || task.status === newStatus) return;

    const prev = tasks;
    const optimistic = tasks.map((t) =>
      t.id === taskId ? { ...t, status: newStatus } : t,
    );
    setTasks(optimistic);

    try {
      await taskApi.changeTaskStatus(taskId, newStatus);
      router.refresh();
    } catch (err) {
      console.error('Update failed, rolling back', err);
      setTasks(prev);
    }
  };

  const columns = [
    TaskStatus.TODO,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ] as TaskStatus[];

  return (
    <div className={classes.board}>
      {columns.map((col) => (
        <div key={col} className={classes.columnWrapper}>
          <BoardColumn
            status={col}
            title={taskStatusLabels[col]}
            tasks={tasks.filter((t) => t.status === col)}
            onTaskDrop={handleTaskDrop}
          />
        </div>
      ))}
    </div>
  );
};
