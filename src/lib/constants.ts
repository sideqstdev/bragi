export const devMode: boolean = process.env.DEV_MODE
  ? process.env.DEV_MODE === "true"
  : true;

export const FIRST_VISIT_COOKIE = `sqst_fv`;
export const FIRST_VISIT_VALUE = `VISITED`;

export const POSTS_S3_BUCKET = process.env.NEXT_PUBLIC_POSTS_S3_BUCKET || ``;
export const REGION = process.env.NEXT_PUBLIC_AWS_REGION || ``;
export const AWS_ACCESS_KEY = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY;
export const AWS_SECRET = process.env.NEXT_PUBLIC_AWS_SECRET;
