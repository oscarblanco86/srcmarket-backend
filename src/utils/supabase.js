import { createClient } from '@supabase/supabase-js';
import config from '#config/env.js';

const { DB_URL, DB_AKEY } = config;

const supabase = createClient(DB_URL, DB_AKEY);

export default supabase;
