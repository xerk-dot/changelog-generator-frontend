import styles from '@components/Hero.module.scss';
import * as React from 'react';

interface HeroProps {
  word?: string;
  isHalfHeight?: boolean;
  isBlinkingAtEnd?: boolean;
}

const Hero: React.FC<HeroProps> = ({ word = "AUGMENT", isHalfHeight = false, isBlinkingAtEnd = false }) => {
  return (
    <section className={styles.hero} style={{ height: isHalfHeight ? '50vh' : '' }}>
      <h1 className={styles.title}>{word}</h1>
      {isBlinkingAtEnd && <span className={styles.blinkingCursor}> &#x25AF;	</span>}
    </section>
  );
};

export default Hero; 