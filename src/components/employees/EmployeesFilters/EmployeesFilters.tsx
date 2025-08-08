'use client';

import { type FC } from 'react';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { departmentOptions } from '@src/components/employees/EmployeesFilters/consts/departmentOptions';
import { roleOptions } from '@src/components/employees/EmployeesFilters/consts/roleOptions';
import { statusOptions } from '@src/components/employees/EmployeesFilters/consts/statusOptions';
import classes from '@src/components/employees/EmployeesFilters/EmployeesFilters.module.scss';
import { SearchParamsKeys } from '@src/shared/enums/searchParamsKeys';
import { FormEntry } from '@src/shared/ui/FormEntry/FormEntry';
import { Input } from '@src/shared/ui/Input/Input';
import { Select } from '@src/shared/ui/Select/Select';

type EmployeesFiltersProps = {
  className?: string;
};

export const EmployeesFilters: FC<EmployeesFiltersProps> = (props) => {
  const { className } = props;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const updateParam = (key: SearchParamsKeys, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    params.set(SearchParamsKeys.PAGE, '1');

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={clsx(classes.container, className)}>
      <FormEntry label={'Search'}>
        <Input
          placeholder="Search by name"
          defaultValue={searchParams.get(SearchParamsKeys.SEARCH) || ''}
          onChange={(value) => updateParam(SearchParamsKeys.SEARCH, value)}
        />
      </FormEntry>

      <FormEntry label={'Role'}>
        <Select
          options={roleOptions}
          defaultValue={searchParams.get(SearchParamsKeys.ROLE) || ''}
          onChange={(value) => updateParam(SearchParamsKeys.ROLE, value)}
        />
      </FormEntry>

      <FormEntry label={'Status'}>
        <Select
          options={statusOptions}
          defaultValue={searchParams.get(SearchParamsKeys.STATUS) || ''}
          onChange={(value) => updateParam(SearchParamsKeys.STATUS, value)}
        />
      </FormEntry>

      <FormEntry label={'Department'}>
        <Select
          options={departmentOptions}
          defaultValue={searchParams.get(SearchParamsKeys.DEPARTMENT) || ''}
          onChange={(value) => updateParam(SearchParamsKeys.DEPARTMENT, value)}
        />
      </FormEntry>
    </div>
  );
};
