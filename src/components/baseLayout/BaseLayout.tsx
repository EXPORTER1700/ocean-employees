import { type FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Geist, Geist_Mono } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

import classes from '@src/components/baseLayout/BaseLayout.module.scss';
import { RoleSelect } from '@src/components/role/RoleSelect/RoleSelect';
import { UserRoleContextProvider } from '@src/shared/contexts/userRoleContext';
import { Routes } from '@src/shared/routes/routes';
import { route } from '@src/shared/utils/route';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type BaseLayoutProps = {
  children: ReactNode;
};

export const BaseLayout: FC<BaseLayoutProps> = (props) => {
  const { children } = props;

  return (
    <UserRoleContextProvider>
      <body
        className={clsx(geistSans.variable, geistMono.variable, classes.body)}
      >
        <header className={classes.header}>
          <Link href={route(Routes.HOME)}>
            <Image
              src={'/images/ocean-logo.jpg'}
              alt={'Logo'}
              width={50}
              height={50}
              priority
            />
          </Link>
          <RoleSelect />
        </header>
        <main className={classes.main}>{children}</main>
      </body>
    </UserRoleContextProvider>
  );
};
