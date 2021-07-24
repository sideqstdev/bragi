import React, { ReactNode } from "react";
import { useState } from "react";
import Modal from "react-modal";
import CreatePostCard from "../CreatePostCard";

interface createPostCardManagerProps {
  closeDialog: () => void;
  dialogOpen: boolean;
}

const CreatePostCardManager: React.FC<createPostCardManagerProps> = ({
  closeDialog,
  dialogOpen,
}) => {
  Modal.setAppElement(`body`);

  const onCreate = async (title: string, body?: string, imageUrl?: string) => {
    console.log(title, body, imageUrl);
    return true;
  };

  return (
    <>
      <Modal
        isOpen={dialogOpen}
        onRequestClose={closeDialog}
        shouldCloseOnOverlayClick={true}
        className={`create-post-content`}
        overlayClassName={`create-post-overlay`}
      >
        <CreatePostCard onCancel={closeDialog} onCreate={onCreate} />
      </Modal>
    </>
  );
};

export default CreatePostCardManager;
