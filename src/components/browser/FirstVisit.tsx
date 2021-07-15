import React, { useEffect, useState } from "react";
import { useCookies, Cookies } from "react-cookie";
import { FIRST_VISIT_COOKIE, FIRST_VISIT_VALUE } from "../../lib/constants";
import { useErrorToasts } from "../../lib/hooks/useErrorToast";

const FirstVisit = () => {
  const [cookies, setCookie, removeCookie] = useCookies([FIRST_VISIT_COOKIE]);
  const [firstVisit, setFirstVisit] = useState(true);
  const { addErrorToast } = useErrorToasts();

  useEffect(() => {
    if (cookies[FIRST_VISIT_COOKIE] === FIRST_VISIT_VALUE) {
      setFirstVisit(false);
    } else {
      setCookie(FIRST_VISIT_COOKIE, FIRST_VISIT_VALUE);
      addErrorToast({
        title: `Welcome to Sideqst`,
        message: `Our site is currently in alpha but your feedback is greatly appreciated.`,
        variant: `notice`,
        type: `static`,
      });
    }
  }, []);

  return null;
};

export default FirstVisit;
