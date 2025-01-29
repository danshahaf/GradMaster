import { createClient as createSupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = "https://lslemdmkahxnvyzyzmfw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzbGVtZG1rYWh4bnZ5enl6bWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxMTM2NzMsImV4cCI6MjA1MzY4OTY3M30.2KMY7qBpH78Yld6lNwcVwx1DcYGaZUHPq9T9njE-d-g";

export const createClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase URL and Anon Key are required. Please check your environment variables.'
    );
  }
  
  return createSupabaseClient(supabaseUrl, supabaseAnonKey);
};