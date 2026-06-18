const SUPABASE_URL = "https://xcoytghkijmpyimozhnc.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_XakARNKLanoIyLtNFKcewA_JmXSnklG";

if (typeof supabase !== 'undefined' && supabase.createClient) {
    window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else if (window.supabase && window.supabase.createClient) {
    window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error("Supabase SDK script was not detected! Make sure your HTML files include the CDN script tag before loading supabase-init.js.");
}