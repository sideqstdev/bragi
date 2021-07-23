import React, { useState } from "react";
import AWS from "aws-sdk";
import {
  POSTS_S3_BUCKET,
  REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET,
} from "../constants";
import Button from "../../components/Button";
import { BsImage, BsImages } from "react-icons/bs";
import { useFilePicker } from "use-file-picker";
import { FaTimes } from "react-icons/fa";
import { SMParagraph } from "../../components/Typography";
import { useEffect } from "react";

AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET,
});

const s3Bucket = new AWS.S3({
  params: { Bucket: POSTS_S3_BUCKET },
  region: REGION,
});

export interface uploadImageS3Interface {
  onImageAdd: (imageUrl) => void;
  clearImage: boolean;
  createPostId?: string;
}

const UploadImageS3: React.FC<uploadImageS3Interface> = ({
  onImageAdd,
  clearImage = false,
  createPostId = `sideqst-post`,
}) => {
  const [
    openFilePicker,
    { filesContent, plainFiles, loading, clear },
  ] = useFilePicker({
    multiple: false,
    accept: `.jpg,.gif,.png`,
  });
  const hasFiles: boolean = plainFiles.length > 0;

  useEffect(() => {
    if (clearImage) {
      clear();
    }
  }, [clearImage]);

  useEffect(() => {
    if (hasFiles) {
      uploadFile(plainFiles[0]);
    }
  }, [hasFiles]);

  const [progress, setProgress] = useState(0);

  const uploadFile = (file) => {
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: POSTS_S3_BUCKET,
      Key: `${createPostId}.jpg`,
      ContentType: `image/jpeg`,
    };

    s3Bucket.upload(params, (err, data) => {
      onImageAdd(data?.Location);
    });
  };

  return (
    <div className={`flex flex-row items-center`}>
      {hasFiles && (
        <span
          onClick={() => {
            clear();
            onImageAdd(null);
          }}
          className={`mr-1 cursor-pointer`}
        >
          <FaTimes size={15} className={`text-dark-danger-hover`} />
        </span>
      )}

      <SMParagraph>{filesContent[0]?.name}</SMParagraph>
      <Button
        onClick={openFilePicker}
        type={`button`}
        loading={loading}
        variant={`icon`}
      >
        <BsImages size={20} />
      </Button>
    </div>
  );
};

export default UploadImageS3;
