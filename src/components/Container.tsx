import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-md mx-auto border p-4 shadow-sm rounded">{children}</div>;
};

export default Container;
