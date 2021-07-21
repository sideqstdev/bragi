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
  const onCreate = async (title, body) => {
    console.log(title, body);
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
