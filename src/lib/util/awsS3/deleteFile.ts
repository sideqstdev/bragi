import AWS from "aws-sdk";
import {
  AWS_ACCESS_KEY,
  AWS_SECRET,
  POSTS_S3_BUCKET,
  REGION,
} from "../../constants";

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET,
});

const s3Bucket = new AWS.S3({
  params: { Bucket: POSTS_S3_BUCKET },
  region: REGION,
});

export const deleteFileByUrl = (url: string) => {
  let fileKeyRegex = /([\w\d_-]*)\.?[^\\\/]*$/;

  const key: string = url.match(fileKeyRegex)?.[0] || ``;

  const params = {
    Bucket: POSTS_S3_BUCKET,
    Key: key,
  };

  s3Bucket.deleteObject(params, (err, data) => {
    if (err) {
      return false;
    }
    if (data) {
      return true;
    }
    return true;
  });
};
