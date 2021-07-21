import { useFormik } from "formik";
import React from "react";
import { BsFilePost } from "react-icons/bs";
import { FaPlus, FaTimes } from "react-icons/fa";
import { useTheme } from "../theme/theme.provider";
import Button from "./Button";
import Card from "./containers/Card";
import Input from "./Input";
import InputArea from "./InputArea";
import { MDHeader } from "./Typography";

export interface createPostCardInterface {
  onCreate: (title, body) => Promise<boolean> | Promise<null>;
  onCancel: () => void;
}

const CreatePostCard: React.FC<createPostCardInterface> = ({
  onCancel,
  onCreate,
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;

  const createPostForm = useFormik({
    initialValues: {
      title: ``,
      body: ``,
    },
    validateOnChange: false,
    validate: ({ title, body }) => {
      const errors: Record<string, string> = {};
      if (title.length <= 0) {
        errors.title = `no title provided`;
      } else if (title.length < 5) {
        errors.title = `title must be at least 5 characters`;
      } else {
        // TODO link up post create?
      }

      if (body.length <= 0) {
        errors.body = `no body provided`;
      } else {
        // TODO link up post create?
      }

      return errors;
    },
    onReset: () => {
      createPostForm.errors = {};
    },
    onSubmit: async ({ title, body }) => {
      let createPostSuccess = await onCreate(title, body);
      if (title === `` && body === ``) {
        // clear errors
        createPostForm.errors = {};
        return;
      } else {
        if (createPostSuccess) {
          createPostForm.errors.title = `Invalid title`;
          createPostForm.errors.body = `Invalid body`;
          return;
        } else {
          // clear errors
          createPostForm.errors = {};
          return;
        }
      }
    },
  });
  return (
    <Card className={`flex flex-col w-full md:flex-row px-3 py-3 shadow-2xl`}>
      <form onSubmit={createPostForm.handleSubmit} className={`w-full`}>
        <div className={`flex flex-row justify-between items-center`}>
          <MDHeader>Create Post</MDHeader>
          <span
            className={`cursor-pointer hover:text-${theme}-default-hover`}
            onClick={onCancel}
          >
            <FaTimes size={20} />
          </span>
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
        <div className={`flex flex-row justify-end mt-4`}>
          <Button onClick={onCancel} variant={`text`} className={`mr-2`}>
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
