import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import UploadImageS3 from "../lib/util/UploadImageS3";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import Card from "./containers/Card";
import Input from "./Input";
import InputArea from "./InputArea";
import { MDHeader, XSHeader } from "./Typography";
import { v4 as uuidv4 } from "uuid";
import { deleteFileByUrl } from "../lib/util/awsS3/deleteFile";

export interface createPostCardInterface {
  onCreate: (
    title: string,
    body?: string,
    imageUrl?: string
  ) => Promise<boolean> | Promise<null>;
  onCancel: () => void;
}

const CreatePostCard: React.FC<createPostCardInterface> = ({
  onCancel,
  onCreate,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const [clearImage, setClearImage] = useState(false);

  const postId = uuidv4();

  const createPostForm = useFormik({
    initialValues: {
      title: ``,
      body: ``,
      imageUrl: null,
    },
    validateOnChange: false,
    validate: ({ title, body, imageUrl }) => {
      const errors: Record<string, string> = {};
      if (title.length <= 0) {
        errors.title = `no title provided`;
      } else if (title.length < 5) {
        errors.title = `title must be at least 5 characters`;
      } else if (title.length >= 100) {
        errors.title = `title must be 100 characters or less`;
      } else {
        // TODO link up post create?
      }

      if (body.length <= 0 && !imageUrl) {
        errors.body = `no body provided`;
      } else {
        // TODO link up post create?
      }

      return errors;
    },
    onReset: () => {
      createPostForm.errors = {};
    },
    onSubmit: async ({ title, body, imageUrl }) => {
      let createPostSuccess = await onCreate(title, body, imageUrl);
      if (title === `` && body === `` && imageUrl === null) {
        // clear errors
        createPostForm.errors = {};
        return;
      } else {
        if (createPostSuccess) {
          createPostForm.errors = {};
          onCancel();
          return;
        } else {
          // clear errors

          createPostForm.errors.title = `Invalid title`;
          createPostForm.errors.body = `Invalid body`;
          return;
        }
      }
    },
  });

  const handleImageAdd = (imageUrl) => {
    createPostForm.setValues({ ...createPostForm.values, imageUrl: imageUrl });
  };

  const handleImageClear = () => {
    if (createPostForm.values.imageUrl) {
      deleteFileByUrl(createPostForm.values.imageUrl);
      setClearImage(true);
      createPostForm.setValues({ ...createPostForm.values, imageUrl: null });
    }
  };

  const handleCancel = () => {
    if (createPostForm.values.imageUrl) {
      deleteFileByUrl(createPostForm.values.imageUrl);
    }
    onCancel();
  };

  useEffect(() => {
    setClearImage(false);
  }, [clearImage]);

  return (
    <Card className={`flex flex-col w-full md:flex-row px-3 py-3 shadow-2xl`}>
      <form
        onSubmit={createPostForm.handleSubmit}
        className={`w-full flex flex-col`}
      >
        <div className={`flex flex-row justify-between items-center`}>
          <MDHeader>Create Post</MDHeader>
          <div className={`flex flex-row`}>
            <UploadImageS3
              onImageAdd={handleImageAdd}
              clearImage={clearImage}
              createPostId={postId}
            />
            <Button
              type={`button`}
              variant={`icon`}
              className={`cursor-pointer items-center hover:text-${theme}-default-hover`}
              onClick={handleCancel}
            >
              <IoMdClose size={20} />
            </Button>
          </div>
        </div>

        <Input
          id={`title`}
          onChange={createPostForm.handleChange}
          name={`title`}
          error={createPostForm.errors.title}
          className={`mt-2`}
          label={`Title`}
          stretch={true}
          placeholder={`Post Title`}
        />
        <InputArea
          rows={6}
          id={`body`}
          onChange={createPostForm.handleChange}
          name={`body`}
          error={createPostForm.errors.body}
          className={`mt-2`}
          label={`Body`}
          stretch={true}
          placeholder={`Post Body`}
        />
        {createPostForm.values.imageUrl && (
          <div className={`w-full mt-2 relative rounded-md`}>
            <XSHeader>Preview</XSHeader>
            <div className={`w-full relative`}>
              <img
                className={`rounded-md h-36`}
                src={createPostForm.values.imageUrl}
              />

              <div className={`absolute left-0 top-2`}>
                <Button
                  type={`button`}
                  onClick={handleImageClear}
                  size={`small`}
                  variant={`icon`}
                >
                  <IoMdClose />
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className={`flex flex-row justify-end mt-4`}>
          <Button
            type={`button`}
            onClick={handleCancel}
            variant={`text`}
            className={`mr-2`}
          >
            Cancel
          </Button>
          <Button
            type={`submit`}
            loading={createPostForm.isSubmitting}
            variant={`primary`}
          >
            Post
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default CreatePostCard;
