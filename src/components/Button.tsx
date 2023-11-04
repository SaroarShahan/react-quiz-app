import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classNames?: string;
}

const Button = ({ children, classNames = '', disabled, ...restProps }: ButtonProps) => {
  return (
    <button
      {...restProps}
      disabled={disabled}
      className={clsx(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        classNames,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
