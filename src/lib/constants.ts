export const devMode: boolean = process.env.DEV_MODE
  ? process.env.DEV_MODE === "true"
  : true;

export const FIRST_VISIT_COOKIE = `sqst_fv`;
export const FIRST_VISIT_VALUE = `VISITED`;
