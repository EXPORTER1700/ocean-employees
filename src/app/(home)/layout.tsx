import type { Metadata } from 'next';

import { BaseLayout } from '@src/components/baseLayout/BaseLayout';

import '@src/shared/styles/index.scss';

export const metadata: Metadata = {
  title: 'Ocean Employees',
  description: 'Employees Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <BaseLayout>{children}</BaseLayout>
    </html>
  );
}
