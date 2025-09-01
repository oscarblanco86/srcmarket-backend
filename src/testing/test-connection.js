// test-connection.js
// require('dotenv').config()
// import { PrismaClient } from '@prisma/client';
// import config from './../config/env'
// console.log('config:', config)
// const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME, DB_SSL} = config

import { createClient } from '@supabase/supabase-js'
import config from '#config/env.js'
const { DB_URL, DB_AKEY } = config
// console.log('DATABASE_URL:', DATABASE_URL)

// Create a single supabase client for interacting with your database
const supabase = createClient(DB_URL, DB_AKEY)


console.log('Supabase Instance: ', supabase)
const { data, error } = await supabase
  .from('profiles')
  .select('*')
  .limit(1);

if (error) {
  console.error('❌ Query failed:', error.message);
} else {
  console.log('✅ Query succeeded:', data);
}


// const { data, error } = await supabase
//   .from('profiles')
//   .insert([{ username: 'connection_test', created_at: new Date() }])
//   .select();

// if (error) {
//   console.error('❌ Insert failed:', error.message);
// } else {
//   console.log('✅ Insert succeeded:', data);
// }


// const { data, error } = await supabase
//   .from('profiles')
//   .update({ username: 'updated_test' })
//   .eq('username', 'connection_test')
//   .select();

// if (error) {
//   console.error('❌ Update failed:', error.message);
// } else {
//   console.log('✅ Update succeeded:', data);
// }


// const { error } = await supabase
//   .from('profiles')
//   .delete()
//   .eq('username', 'updated_test');

// if (error) {
//   console.error('❌ Delete failed:', error.message);
// } else {
//   console.log('✅ Delete succeeded');
// }


// const { data, error } = await supabase.rpc('hello_world');

// if (error) {
//   console.error('❌ RPC failed:', error.message);
// } else {
//   console.log('✅ RPC succeeded:', data);
// }


// const { data, error } = await supabase.rpc('get_usernames');

// if (error) console.error(error);
// else console.log('Usernames:', data);
