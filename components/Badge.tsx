'use client';

import styles from '@components/Badge.module.scss';

import * as React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  isAllCaps?: boolean;
  redAsterisk?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ children, isAllCaps = true, redAsterisk = false, ...rest }) => {
  return (
    <span className={styles.root} style={{ textTransform: isAllCaps ? 'uppercase' : 'none' }} {...rest}>
      {children}
      {redAsterisk && <span className={styles.asterisk}>*</span>}
    </span>
  );
};

export default Badge;