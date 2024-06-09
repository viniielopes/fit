import { S3Client } from '@aws-sdk/client-s3';

export const clientS3 = new S3Client({
    forcePathStyle: true,
  region: 'us-west-1',
  endpoint: process.env.S3_ENDPOINT,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY || '',
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
});
