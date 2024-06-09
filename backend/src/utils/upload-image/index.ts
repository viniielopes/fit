import { PutObjectCommand } from '@aws-sdk/client-s3';
import { clientS3 } from '@config/S3Client';
import { UploadImageParams } from './types';

export const uploadImage = async ({ imageTitle, imageBuffer, contentType }: UploadImageParams) => {
  const command = new PutObjectCommand({
    Bucket: 'fit',
    Body: imageBuffer,
    ContentType: contentType,
    Key: imageTitle,
  });

  const responseS3 = await clientS3.send(command);

  return responseS3;
};
