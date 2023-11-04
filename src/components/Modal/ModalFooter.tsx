import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  className?: string;
}

const ModalFooter = ({ className = '', children }: PropsWithChildren<Props>) => {
  const classNames = clsx('modal-footer', className);

  return <div className={classNames}>{children}</div>;
};

export default ModalFooter;
