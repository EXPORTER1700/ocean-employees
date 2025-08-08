import { type FC, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Tab } from '@src/shared/types/common/tab';
import classes from '@src/shared/ui/Tabs/Tabs.module.scss';

type TabsProps = {
  className?: string;
  tabs: Tab[];
};

export const Tabs: FC<TabsProps> = (props) => {
  const { className, tabs } = props;

  const pathname = usePathname();
  const containerRef = useRef<HTMLUListElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const activeEl = containerRef.current?.querySelector<HTMLLIElement>(
      `.${classes.active}`,
    );
    if (activeEl) {
      setIndicatorStyle({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [pathname]);

  return (
    <ul className={clsx(className, classes.container)} ref={containerRef}>
      {tabs.map((tab) => (
        <li key={tab.label} className={classes.tab}>
          <Link
            href={tab.path}
            className={clsx(classes.link, {
              [classes.active]: pathname === tab.path,
            })}
          >
            {tab.label}
          </Link>
        </li>
      ))}
      <span
        className={classes.indicator}
        style={{
          transform: `translateX(${indicatorStyle.left}px)`,
          width: indicatorStyle.width,
        }}
      />
    </ul>
  );
};
