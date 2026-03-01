import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jboovofuecyfrsbbahrs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impib292b2Z1ZWN5ZnJzYmJhaHJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2MjY3NjcsImV4cCI6MjA3MjIwMjc2N30.tSBejf372RLdznILe7fvhZlWGGiwuadc09Z44sg79x8';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
