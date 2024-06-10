namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    DB_HOST: string;
    DB_USERNAME: string;
    DB_PASS: string;

    S3_ENDPOINT: string;
    S3_ACCESS_KEY: string;
    S3_ANON_KEY: string;
    S3_SECRET_KEY: string;

    SUPABASE_SERVICE_KEY: string;
  }
}
