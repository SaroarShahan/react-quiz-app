import Button from '~/components/Button';
import Modal from '~/components/Modal';

interface DeleteModalConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
}

const DeleteModalConfirmation = ({ isOpen, onClose, onClick }: DeleteModalConfirmationProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-sm">
      <Modal.Header closeButtonPosition="right">
        Would you like to delete this question?
        <Modal.CloseIcon onClose={onClose} />
      </Modal.Header>
      <Modal.Body className="flex justify-center gap-4">
        <Button type="button" onClick={onClose} className="bg-red-500">
          No
        </Button>
        <Button type="button" onClick={onClick}>
          Yes
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModalConfirmation;
