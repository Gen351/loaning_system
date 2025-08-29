// index,js
import { supabase } from "./services/supabaseClient";
import { ADMIN_EMAIL } from "./services/admin_email";


// Login with Google
document.getElementById("google-login").addEventListener("click", async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: window.location.href } // callback to same page
    });

    console.log(data);

    if (error) console.error("Login error:", error.message);
});

// Check session on load
(async () => {
    const { data } = await supabase.auth.getSession();
    if (data?.session) {
        const user = data.session.user;
        if (user.email === ADMIN_EMAIL) {
            window.location.href = "../admin.html";
        } else {
            // sign out & show warning
            await supabase.auth.signOut();
            document.getElementById("warning").classList.remove("hidden");
        }
    } else {
        // if the session is null
        window.location.href = "../index.html";
    }
})();