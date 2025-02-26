'use client';

import { Slider } from '@shadcn/ui';
import styles from '@components/NumberRangeSlider.module.scss';

import * as React from 'react';

interface RangerProps {
  defaultValue?: number;
  max?: number;
  min?: number;
  value?: number;
  onChange?: (value: number) => void;
}

const NumberRangeSlider: React.FC<RangerProps> = ({ defaultValue = 0, max = 20, min = 0, value, onChange }) => {
  const [sliderValue, setSliderValue] = React.useState<number>(value !== undefined ? value : defaultValue);

  const handleChange = (newValue: number) => {
    setSliderValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.root}>
      <Slider
        value={sliderValue}
        min={min}
        max={max}
        onValueChange={handleChange}
        step={1}
      />
      <div className={styles.amount}>{sliderValue}</div>
    </div>
  );
};

export default NumberRangeSlider;
