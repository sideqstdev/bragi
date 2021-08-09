import React from "react";
import Modal from "react-modal";
import { refetchPostsQuery, useCreatePostMutation } from "../../lib/generated";
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
  const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
    refetchQueries: [
      refetchPostsQuery({
        page: {
          take: 15,
          skip: 0,
        },
      }),
    ],
  });

  const onCreate = async (title: string, body?: string, imageUrl?: string) => {
    try {
      await createPostMutation({
        variables: {
          input: {
            title: title,
            content: body,
            imageUrl: imageUrl,
          },
        },
      });
      return true;
    } catch (err) {
      return false;
    }
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
