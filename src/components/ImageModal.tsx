import React from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import Card from "./containers/Card";
import { SMHeader } from "./Typography";

interface imageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title?: string;
  size?: {
    width?: number;
    height?: number;
  };
}

const ImageModal: React.FC<imageModalProps> = ({
  isOpen = false,
  onClose,
  imageUrl,
  size,
  title = `Post Image`,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  if (!isOpen) {
    return null;
  }
  return (
    <Modal
      isOpen
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      className={`image-modal`}
      overlayClassName={`image-modal-overlay`}
    >
      <Card className={`p-4`}>
        <div className={`flex flex-row justify-between items-center mb-2`}>
          <SMHeader>{title}</SMHeader>
          <Button
            type={`button`}
            variant={`icon`}
            className={`cursor-pointer items-center hover:text-${theme}-default-hover`}
            onClick={onClose}
          >
            <IoMdClose size={20} />
          </Button>
        </div>

        <img className={`w-full rounded-md`} src={imageUrl} alt={title} />
      </Card>
    </Modal>
  );
};

export default ImageModal;
