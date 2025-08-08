'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';

import { Routes } from '@src/shared/routes/routes';
import { Tab } from '@src/shared/types/common/tab';
import { Tabs } from '@src/shared/ui/Tabs/Tabs';
import { route } from '@src/shared/utils/route';

export const EmployeeTabs = () => {
  const { id } = useParams<{ id: string }>();

  const tabs = useMemo<Tab[]>(() => {
    return [
      {
        label: 'Info',
        path: route(Routes.EMPLOYEE, { id }),
      },
      {
        label: 'Tasks',
        path: route(Routes.EMPLOYEE_TASKS, { id }),
      },
    ];
  }, [id]);

  return <Tabs tabs={tabs} />;
};
