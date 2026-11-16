
const SUPABASE_URL = "https://uqmlhppynodlacnvowqa.supabase.co";

const SUPABASE_KEY = "sb_publishable_SLrCZA6pzYn5Xy6VZ7JB0w_x2wf4mE4";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY,
    {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    }
);
