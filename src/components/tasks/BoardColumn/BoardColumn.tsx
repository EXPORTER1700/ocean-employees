'use client';

import React, { FC } from 'react';

import classes from '@src/components/tasks/BoardColumn/BoardColumn.module.scss';
import { TaskCard } from '@src/components/tasks/TaskCard/TaskCard';
import { TaskStatus } from '@src/shared/api/task/enums';
import { Task } from '@src/shared/api/task/types';

type BoardColumnProps = {
  status: TaskStatus;
  title?: string;
  tasks: Task[];
  onTaskDrop: (taskId: number, newStatus: TaskStatus) => void;
};

export const BoardColumn: FC<BoardColumnProps> = ({
  status,
  title,
  tasks,
  onTaskDrop,
}) => {
  const onDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    const idRaw = e.dataTransfer.getData('text/plain');
    const id = Number(idRaw);
    if (!Number.isNaN(id)) {
      onTaskDrop(id, status);
    }
  };

  return (
    <div onDragOver={onDragOver} onDrop={onDrop} className={classes.container}>
      <h3 className={classes.title}>{title ?? status.replace('_', ' ')}</h3>
      <div className={classes.tasks}>
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
      </div>
    </div>
  );
};
