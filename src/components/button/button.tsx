import React from 'react';

type Props = {
  label: string;
};

/**
 * Primary UI component for user interaction
 */
const Button: React.FC<Props> = ({
  label,
}: Props) => {
  return (
    <button type='button'>
      {label}
    </button>
  );
};

export default Button;
