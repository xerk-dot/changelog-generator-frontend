'use client';

import styles from '@components/Navigation.module.scss';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import ActionButton from '@components/ActionButton';
import Link from 'next/link';
import DropdownMenuTrigger from '@components/DropdownMenuTrigger';

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  logoHref?: string;
  logoTarget?: React.HTMLAttributeAnchorTarget;
  onClickLogo?: React.MouseEventHandler<HTMLButtonElement>;
  logo?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  logoRightAligned?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ children, logoHref, logoTarget, onClickLogo, logo, left, right, logoRightAligned = false }) => {
  const pathname = usePathname();

  const renderModals = () => {

  };

  const renderLeft = () => {
    return (
      <>
        {pathname === '/' ? (
          <Link href="/about" style={{ textDecoration: 'none' }}>
            <ActionButton>ABOUT</ActionButton>
          </Link>
        ) : (
          <Link href="/" style={{ textDecoration: 'none' }}>
            <ActionButton>BACK</ActionButton>
          </Link>
        )}
        {left}
      </>
    );
  };

  let logoElement = <button className={styles.logo}>{logo}</button>;

  if (onClickLogo) {
    logoElement = (
      <button className={styles.logo} onClick={onClickLogo}>
        {logo}
      </button>
    );
  }

  if (logoHref) {
    logoElement = (
      <a href={logoHref} className={styles.logo} target={logoTarget}>
        {logo}
      </a>
    );
  }

  return (
    <nav className={styles.root} style={{ background: logoRightAligned ? 'var(--theme-background)' : 'transparent' }}>
      {!logoRightAligned && logoElement}
      <section className={styles.left}>{renderLeft()}</section>
      <section className={styles.children}>{children}</section>
      {logoRightAligned && logoElement}
      <section className={styles.right}>{}</section>
    </nav>
  );
};

export default Navigation;
