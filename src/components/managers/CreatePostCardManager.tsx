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
        style={{
          overlay: { background: `rgb(33, 38, 43, 0.5)`, padding: 0 },
          content: {
            top: `35%`,
            left: `50%`,
            right: `auto`,
            bottom: `auto`,
            marginRight: "-50%",
            width: "60%",
            transform: "translate(-40%, -10%)",
            padding: 0,
            margin: 0,
            border: 0,
            backgroundColor: `transparent`,
          },
        }}
      >
        <CreatePostCard onCancel={closeDialog} onCreate={onCreate} />
      </Modal>
    </>
  );
};

export default CreatePostCardManager;
