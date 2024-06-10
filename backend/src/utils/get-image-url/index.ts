import { GetImageURLParams } from './types';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.S3_ENDPOINT, process.env.S3_ANON_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
});

export const getImageURL = async ({ imageTitle }: GetImageURLParams) => {
  const {
    data: { publicUrl },
  } = supabase.storage.from('fit-9871234').getPublicUrl('public/' + imageTitle);

  return publicUrl;
};
