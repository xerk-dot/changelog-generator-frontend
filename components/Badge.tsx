'use client';

import styles from '@components/Badge.module.scss';

import * as React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  isAllCaps?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ children, isAllCaps = true, ...rest }) => {
  return (
    <span className={styles.root} style={{ textTransform: isAllCaps ? 'uppercase' : 'none' }} {...rest}>
      {children}
    </span>
  );
};

export default Badge;