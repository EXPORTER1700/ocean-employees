'use client';

import React, { FC } from 'react';

import classes from '@src/components/tasks/TaskCard/TaskCard.module.scss';
import { Task } from '@src/shared/api/task/types';

type TaskCardProps = {
  task: Task;
};

export const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const onDragStart: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.setData('text/plain', String(task.id));
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div draggable onDragStart={onDragStart} className={classes.card}>
      <div className={classes.title}>{task.title}</div>
      <div className={classes.description}>{task.description}</div>
    </div>
  );
};
