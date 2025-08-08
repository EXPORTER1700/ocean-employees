import { ButtonHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

import classes from '@src/shared/ui/Button/Button.module.scss';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className, ...otherProps } = props;

  return <button className={clsx(className, classes.button)} {...otherProps} />;
};
