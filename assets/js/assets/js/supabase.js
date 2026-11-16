
const SUPABASE_URL = "https://uqmlhppynodlacnvowqa.supabase.co";

const SUPABASE_KEY = "sb_publishable_SLrCZA6pzYn5Xy6VZ7JB0w_x2wf4mE4";

window.stocktrackSupabase = window.supabase.createClient(
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

console.log("StockTrack Supabase bağlantısı hazır.");

window.stocktrackSupabase.auth.getSession().then(({ data, error }) => {
    if (error) {
        console.error("Supabase bağlantı hatası:", error.message);
    } else {
        console.log("Supabase bağlantısı başarılı!");
        console.log("Oturum:", data.session ? "Açık" : "Kapalı");
    }
});
