'use client';

import { useRef, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

import useClickOutside from '@src/shared/hooks/useOutsideClick';
import { Option } from '@src/shared/types/common/option';
import classes from '@src/shared/ui/Select/Select.module.scss';

type SelectProps<T extends string | number> = {
  className?: string;
  defaultValue: string;
  options: Option<T>[];
  onChange: (value: T) => void;
};

export const Select = <T extends string | number>(props: SelectProps<T>) => {
  const { className, onChange, options, defaultValue } = props;

  const [selectedOption, setSelectedOption] = useState(
    () => options.find(({ value }) => value === defaultValue) || options[0],
  );
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const openSelect = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSelect = () => {
    setIsOpen(false);
  };

  useClickOutside(containerRef, closeSelect);

  const handleChange = (option: Option<T>) => {
    onChange(option.value);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={clsx(className, classes.container)} ref={containerRef}>
      <div className={classes.select} onClick={openSelect}>
        {selectedOption.label}
        <Image
          src={'/icons/down-arrow.svg'}
          alt={'arrow down'}
          width={20}
          height={20}
          className={clsx({ [classes.iconReversed]: isOpen })}
        />
      </div>
      <ul className={classes.options}>
        {options.map((option) => (
          <li
            className={clsx(classes.option, { [classes.hidden]: !isOpen })}
            key={option.value}
            onClick={() => handleChange(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
