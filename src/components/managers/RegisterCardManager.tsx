import React from "react";
import { useRouter } from "next/router";
import { useLoggedInStore } from "../../stores/storeLogin";
import RegisterCard from "../RegisterCard";
import { useRegisterMutation } from "../../lib/generated";
import { useErrorToasts } from "../../lib/hooks/useErrorToast";
import { devMode } from "../../lib/constants";

interface registerCardManagerProps {}

const RegisterCardManager: React.FC = () => {
  const router = useRouter();
  const loginStore = useLoggedInStore();
  const [registerMutation, { data, loading, error }] = useRegisterMutation();
  const { addErrorToast } = useErrorToasts();

  const onRegister = async (
    email: string,
    username: string,
    password: string
  ) => {
    //TODO register logic
    try {
      const response = await registerMutation({
        variables: {
          input: {
            email: email,
            gamerTag: username,
            password: password,
          },
        },
      });
      addErrorToast({
        title: `Registration`,
        message: `Successfully registered ${response.data.register.email}`,
        duration: 7000,
        variant: `info`,
      });
      router.push(`/login`);
      return;
    } catch (err) {
      devMode
        ? addErrorToast({
            title: `Registration`,
            message: `Error whilst registering: ${err.toString()}`,
            duration: 14000,
            variant: `warning`,
            type: `temporary`,
          })
        : null;
      return err.toString();
    }
  };

  const routeLogin = () => {
    router.push(`/login`);
    return;
  };

  const onTwitterRegister = () => {
    console.log("Registering with twitter");
    addErrorToast({
      title: `Twitter`,

      duration: 5000,
      variant: "info",
    });
    //TODO setup twitter oauth
  };

  const onDiscordRegister = () => {
    //TODO setup discord oauth
    addErrorToast({
      title: `Discord`,
      message: `Registering with Discord`,
      duration: 5000,
      variant: `notice`,
    });
  };

  // if logged in deny access to register page
  if (loginStore.loggedIn) {
    router.push(`/`);
    return null;
  } else {
    return (
      <RegisterCard
        onRegister={onRegister}
        onGoToLogin={routeLogin}
        onTwitterRegister={onTwitterRegister}
        onDiscordRegister={onDiscordRegister}
        loading={loading}
      />
    );
  }
};

export default RegisterCardManager;
