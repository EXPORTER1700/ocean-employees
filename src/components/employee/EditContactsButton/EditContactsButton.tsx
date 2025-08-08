'use client';

import { FC, useRef } from 'react';
import Image from 'next/image';

import { EditContactsForm } from '@src/components/employee/EditContactsForm/EditContactsForm';
import { EmployeeRole } from '@src/shared/api/employee/enums';
import { Employee } from '@src/shared/api/employee/types';
import { useUserRole } from '@src/shared/contexts/userRoleContext';
import { Modal, ModalRef } from '@src/shared/ui/Modal/Modal';

type EditContactsButtonProps = {
  employee: Employee;
};

export const EditContactsButton: FC<EditContactsButtonProps> = (props) => {
  const { employee } = props;

  const modal = useRef<ModalRef>(null);
  const { role } = useUserRole();

  if (role === EmployeeRole.DEVELOPER) {
    return null;
  }

  const handleOpenModal = () => {
    modal.current?.present();
  };

  const handleCloseModal = () => {
    modal.current?.dismiss();
  };

  return (
    <>
      <button onClick={handleOpenModal}>
        <Image
          src={'/icons/edit-button.svg'}
          alt={'Edit'}
          width={20}
          height={20}
        />
      </button>
      <Modal ref={modal}>
        <EditContactsForm
          initialContacts={employee.contacts}
          employeeId={employee.id}
          onSubmitSuccess={handleCloseModal}
        />
      </Modal>
    </>
  );
};
