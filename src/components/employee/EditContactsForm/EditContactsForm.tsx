'use client';

import { FC, FormEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';

import classes from '@src/components/employee/EditContactsForm/EditContactsForm.module.scss';
import { employeeApi } from '@src/shared/api/employee/employeeApi';
import { EmployeeContacts } from '@src/shared/api/employee/types';
import { Button } from '@src/shared/ui/Button/Button';
import { FormEntry } from '@src/shared/ui/FormEntry/FormEntry';
import { Input } from '@src/shared/ui/Input/Input';

type EditContactsFormProps = {
  employeeId: number;
  initialContacts: EmployeeContacts;
  onSubmitSuccess: () => void;
};

export const EditContactsForm: FC<EditContactsFormProps> = (props) => {
  const { employeeId, initialContacts, onSubmitSuccess } = props;

  const router = useRouter();

  const [formData, setFormData] = useState<EmployeeContacts>(initialContacts);

  const changeForm = (key: keyof EmployeeContacts) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      await employeeApi.updateEmployeeContacts(employeeId, formData);

      onSubmitSuccess();
    } catch (e) {
      console.error('Error on updating contacts', { e });
    }

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormEntry label="Phone">
        <Input value={formData.phone} onChange={changeForm('phone')} />
      </FormEntry>
      <FormEntry label="Telegram">
        <Input
          value={formData.telegramUsername}
          onChange={changeForm('telegramUsername')}
        />
      </FormEntry>
      <Button type="submit">Save</Button>
    </form>
  );
};
