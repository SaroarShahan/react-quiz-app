import { ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classNames?: string;
}

const Button = ({ children, classNames = '', ...restProps }: ButtonProps) => {
  return (
    <button
      {...restProps}
      className={clsx(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        classNames,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
