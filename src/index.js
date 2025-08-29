import { supabase } from "./services/supabaseClient";
import { ADMIN_EMAIL } from "./services/admin_email";

// Login with Google
document.getElementById("google-login").addEventListener("click", async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.href }
    });

    if (error) console.error("Login error:", error.message);
});

// Use a session listener to handle redirects
supabase.auth.onAuthStateChange((event, session) => {
    // Only proceed if the session is available
    if (session) {
        const user = session.user;
        if (user.email === ADMIN_EMAIL) {
            window.location.href = "../admin.html";
        } else {
            // sign out & show warning for non-admins
            supabase.auth.signOut();
            document.getElementById("warning").classList.remove("hidden");
        }
    }
});