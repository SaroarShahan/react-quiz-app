import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({ children, className = '', disabled, ...restProps }: ButtonProps) => {
  return (
    <button
      {...restProps}
      disabled={disabled}
      className={clsx(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
