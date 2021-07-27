import React, { useState } from "react";
import AWS from "aws-sdk";
import {
  POSTS_S3_BUCKET,
  REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET,
} from "../constants";
import Button from "../../components/Button";
import { BiImageAlt } from "react-icons/bi";
import { useFilePicker } from "use-file-picker";
import { IoMdClose } from "react-icons/io";
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
  const [s3FileName, setS3FileName] = useState(`${createPostId}.jpg`);

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
    console.log(file);
    setS3FileName(`${createPostId}.jpg`);
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: POSTS_S3_BUCKET,
      Key: `${createPostId}`,
      ContentType: file.type ? file.type : `image/jpeg`,
    };

    s3Bucket.upload(params, (err, data) => {
      onImageAdd(data?.Location);
    });
  };

  const deleteFile = () => {
    const params = {
      Bucket: POSTS_S3_BUCKET,
      Key: s3FileName,
    };

    s3Bucket.deleteObject(params, (err, data) => {
      if (data) {
        setS3FileName(null);
      }
    });
  };

  return (
    <div className={`flex flex-row items-center`}>
      {hasFiles && (
        <span
          onClick={() => {
            clear();
            onImageAdd(null);
            deleteFile();
          }}
          className={`mr-1 cursor-pointer`}
        >
          <IoMdClose className={`text-dark-danger-hover`} />
        </span>
      )}

      <SMParagraph>{filesContent[0]?.name}</SMParagraph>
      <Button
        onClick={openFilePicker}
        type={`button`}
        loading={loading}
        variant={`icon`}
      >
        <BiImageAlt size={20} />
      </Button>
    </div>
  );
};

export default UploadImageS3;
