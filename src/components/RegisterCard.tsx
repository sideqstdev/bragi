import React from "react";
import { useTheme } from "../theme/theme.provider";
import { useLoggedInStore } from "../stores/storeLogin";
import { useFormik } from "formik";
import Card from "./containers/Card";
import { MDHeader, Paragraph } from "./Typography";
import Input from "./Input";
import { FiMail, FiUser, FiLock } from "react-icons/fi";
import Button from "./Button";
import { IoLogoTwitter, IoLogoDiscord } from "react-icons/io5";
IoLogoTwitter;
type registerFields = {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
};

export interface registerCardProps {
  onRegister: (
    email: string,
    user: string,
    pass: string
  ) => Promise<string> | Promise<null>;
  onDiscordRegister?: () => void;
  onTwitterRegister?: () => void;
  onGoToLogin: () => void;
  otherLoginMethods?: boolean;
  loading?: boolean;
}

const RegisterCard: React.FC<registerCardProps> = ({
  onRegister,
  onDiscordRegister,
  onTwitterRegister,
  onGoToLogin,
  otherLoginMethods = true,
  loading = false,
  ...props
}) => {
  const themeCtx = useTheme();
  const theme = themeCtx.theme;
  const loginStore = useLoggedInStore();

  const registerForm = useFormik({
    initialValues: {
      email: ``,
      username: ``,
      password: ``,
      confirmPassword: ``,
    },
    validateOnChange: false,
    validate: ({ email, username, password, confirmPassword }) => {
      const errors: registerFields = {};

      //email errors
      if (email.length <= 0) {
        errors.email = `no email provided`;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        errors.email = `invalid email`;
      } else {
        // TODO link up to auth service to check for duplicates etc.
      }

      //username errors
      if (username.length <= 0) {
        errors.username = `no username provided`;
      } else if (username.length < 3) {
        errors.username = `must be at least 3 characters`;
      } else {
        // TODO link up to auth service to check for duplicates etc.
      }

      //password errors
      if (password.length <= 0) {
        errors.password = "no password provided";
      } else if (password.length < 8) {
        errors.password = `must be at least 8 characters`;
      } else {
        // FEATURE could run password against a dictionary to warn user of reusing passwords etc ?
        // Possible security vuln if implemented incorrectly? for now do nothing
      }

      //confirm password errors
      if (confirmPassword !== password || confirmPassword.length <= 0) {
        errors.confirmPassword = "doesn't match";
      }

      return errors;
    },
    onSubmit: async ({ email, username, password }) => {
      let error = await onRegister(email, username, password);
      if (!error) {
        return;
      }
      if (error.includes(`already exists with the given email`)) {
        registerForm.errors.email = `email already in use`;
        return;
      }
      if (error.includes(`already exists with the given gamerTag`)) {
        registerForm.errors.username = `name already in use`;
        return;
      }
    },
  });

  return (
    <Card
      className={`flex flex-col w-full mx- md:w-3/4 md:flex-row lg:w-2/4 xl:w-2/6 px-3 py-3`}
    >
      {otherLoginMethods ? (
        <>
          <form
            autoComplete={"off"}
            onSubmit={registerForm.handleSubmit}
            className={`flex flex-col w-full border-b-2 pb-6 border-dark-box-box4 md:pr-3 md:border-b-0 md:border-r-2 md:border-dark-box-box4 md:w-2/3`}
          >
            <MDHeader>Create Account</MDHeader>
            <Input
              autoComplete={"off"}
              onChange={registerForm.handleChange}
              name={`username`}
              error={registerForm.errors.username}
              iconLeft={<FiUser />}
              className={`mt-2`}
              label={`Username`}
              stretch={true}
              placeholder={`must be at least 3 characters`}
            />
            <Input
              autoComplete={"off"}
              id={`email`}
              onChange={registerForm.handleChange}
              name={`email`}
              autoFocus
              error={registerForm.errors.email}
              iconLeft={<FiMail />}
              className={`mt-2`}
              label={`Email`}
              stretch={true}
              placeholder={`sideqst@sideqst.com`}
            />
            <Input
              autoComplete={"new-password"}
              id={`new-password`}
              onChange={registerForm.handleChange}
              name={`password`}
              error={registerForm.errors.password}
              iconLeft={<FiLock />}
              type={`password`}
              className={`mt-2`}
              label={`Password`}
              stretch={true}
              placeholder={`must be at least 8 characters`}
            />
            <Input
              autoComplete={"new-password"}
              id={`confirm-password`}
              onChange={registerForm.handleChange}
              name={`confirmPassword`}
              error={registerForm.errors.confirmPassword}
              iconLeft={<FiLock />}
              type={`password`}
              className={`mt-2`}
              label={`Confirm Password`}
              stretch={true}
              placeholder={`repeat password`}
            />
            <Button
              type={`submit`}
              loading={loading}
              className={`mt-6`}
              variant={`primary`}
              stretch={true}
            >
              Register
            </Button>
            <Paragraph className={`mt-6`}>
              Already have an account?{" "}
              <span
                onClick={onGoToLogin}
                className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled font-bold`}
              >
                Login
              </span>
            </Paragraph>
          </form>
          <div className={`flex flex-col mt-3 w-full md:ml-3 md:w-1/3`}>
            <MDHeader className={`mb-2`}>or register with</MDHeader>
            <Button
              onClick={onDiscordRegister}
              className={`bg-discord hover:bg-discord-hover`}
              iconLeft={<IoLogoDiscord />}
              stretch={true}
              variant={`default`}
            >
              Discord
            </Button>
            <Button
              onClick={onTwitterRegister}
              className={`mt-3`}
              iconLeft={<IoLogoTwitter />}
              stretch={true}
              variant={`default`}
            >
              Twitter
            </Button>
          </div>
        </>
      ) : (
        <form onSubmit={registerForm.handleSubmit} className={`w-full pb-6`}>
          <MDHeader>Create Account</MDHeader>
          <Input
            autoComplete={`off`}
            id={`email`}
            onChange={registerForm.handleChange}
            name={`email`}
            autoFocus
            error={registerForm.errors.email}
            iconLeft={<FiMail />}
            className={`mt-2`}
            label={`Email`}
            stretch={true}
            placeholder={`sideqst@sideqst.com`}
          />
          <Input
            autoComplete={`off`}
            onChange={registerForm.handleChange}
            name={`username`}
            autoFocus
            error={registerForm.errors.username}
            iconLeft={<FiUser />}
            className={`mt-2`}
            label={`Username`}
            stretch={true}
            placeholder={`must be at least 3 characters`}
          />
          <Input
            autoComplete={"new-password"}
            onChange={registerForm.handleChange}
            name={`password`}
            autoFocus
            error={registerForm.errors.password}
            iconLeft={<FiLock />}
            type={`password`}
            className={`mt-2`}
            label={`Password`}
            stretch={true}
            placeholder={`must be at least 8 characters`}
          />
          <Input
            autoComplete={"new-password"}
            onChange={registerForm.handleChange}
            name={`confirmPassword`}
            autoFocus
            error={registerForm.errors.confirmPassword}
            iconLeft={<FiLock />}
            type={`password`}
            className={`mt-2`}
            label={`Confirm Password`}
            stretch={true}
            placeholder={`repeat password`}
          />
          <Button
            type={`submit`}
            loading={loading}
            className={`mt-6`}
            variant={`primary`}
            stretch={true}
          >
            Register
          </Button>
          <Paragraph className={`mt-6`}>
            Already have an account?{" "}
            <span
              onClick={onGoToLogin}
              className={`text-${theme}-primary-text cursor-pointer hover:text-${theme}-primary-disabled font-bold`}
            >
              Login
            </span>
          </Paragraph>
        </form>
      )}
    </Card>
  );
};

export default RegisterCard;
