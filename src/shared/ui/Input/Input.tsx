import { ChangeEvent, type FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import classes from '@src/shared/ui/Input/Input.module.scss';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  className?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = (props) => {
  const { className, onChange, ...otherProps } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value, event);
  };

  return (
    <input
      className={clsx(className, classes.input)}
      onChange={handleChange}
      {...otherProps}
    />
  );
};
