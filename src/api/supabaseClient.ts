import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fqudwriwcsknhktudpta.supabase.co'; // Substitua pela URL do seu projeto Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxdWR3cml3Y3NrbmhrdHVkcHRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NDI5MDMsImV4cCI6MjA1MjAxODkwM30.JgmokkX_CvAHD8Sy5qkWnJF6nE5rYzaTWVO1iriPaBo'; // Substitua pela sua chave API pública

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
