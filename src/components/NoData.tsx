import { PropsWithChildren } from 'react';

const NoData = ({ children, title }: PropsWithChildren<{ title?: string }>) => {
  return <p className="text-sm text-center text-gray-500">{children ?? title}</p>;
};

export default NoData;
