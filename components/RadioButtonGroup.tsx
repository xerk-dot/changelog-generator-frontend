'use client';

import * as React from 'react';
import styles from '@components/RadioButtonGroup.module.scss';
import RadioButton from '@components/RadioButton';

interface RadioOption {
  value: string;
  label: string;
  feedback?: string | React.ReactNode;
}

interface RadioButtonGroupProps {
  options: RadioOption[];
  defaultValue?: string;
  onChange?: (value: number) => void;
  tabCount?: number;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, defaultValue = '', onChange, tabCount = 0 }) => {
  const [selectedValue, setSelectedValue] = React.useState<string>(defaultValue);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(Number(value));
    }
  };

  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <div className={styles.container}>
      {options.map((option, index) => (
        <div key={option.value} className={styles.radioWrapper} style={{ marginLeft: `${tabCount * 1}ch` }}>
          <RadioButton 
            name="radio-group" 
            value={option.value} 
            selected={selectedValue === option.value} 
            onSelect={handleSelect}
          >
            {option.label}
          </RadioButton>
          {selectedValue === option.value && option.feedback && (
            <div className={styles.feedback}>
              {option.feedback}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
