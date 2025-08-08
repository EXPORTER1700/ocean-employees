'use client';

import {
  forwardRef,
  ReactNode,
  Ref,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import dynamic from 'next/dynamic';

import classes from '@src/shared/ui/Modal/Modal.module.scss';

export type ModalRef = {
  present: () => void;
  dismiss: () => void;
  isOpen: boolean;
};

type ModalProps = {
  onClose?: () => void;
  onOpen?: () => void;
  children: ReactNode;
  modalClassName?: string;
};

const ModalComponent = forwardRef((props: ModalProps, ref: Ref<ModalRef>) => {
  const { onClose, onOpen, modalClassName, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const present = useCallback(() => {
    document.body.style.overflow = 'hidden';

    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  const dismiss = useCallback(() => {
    document.body.style.overflow = 'auto';

    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  useImperativeHandle(ref, () => ({
    present,
    dismiss,
    isOpen,
  }));

  return createPortal(
    <div className={clsx(classes.wrapper, { [classes.open]: isOpen })}>
      <div className={classes.overlay} onClick={dismiss}></div>

      <div className={clsx(classes.modal, modalClassName)}>{children}</div>
    </div>,
    document?.body,
  );
});

ModalComponent.displayName = 'Modal';

export const Modal = dynamic(async () => ModalComponent, {
  ssr: false,
});
