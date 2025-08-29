// admin.js
import { supabase } from "./services/supabaseClient.js";
import { ADMIN_EMAIL } from "./services/admin_email.js";
import { renderMembers } from "./models/member.js";

// Use a session listener to handle redirects
// This is the correct approach for handling OAuth redirects
supabase.auth.onAuthStateChange((event, session) => {
    // Redirect to index if the session is null (user is not logged in)
    if (!session) {
        window.location.href = "../index.html";
    } else {
        // If a session exists, check for admin email
        const user = session.user;
        if (user.email !== ADMIN_EMAIL) {
            window.location.href = "../index.html";
            supabase.auth.signOut(); // Sign out non-admins
        } else {
            // Only render content if the user is an admin
            document.addEventListener("DOMContentLoaded", async () => {
                const app = document.getElementById("members-container");
                app.innerHTML = await renderMembers();
            });
        }
    }
});



document.addEventListener("DOMContentLoaded", async () => {
    const app = document.getElementById("members-container");
    app.innerHTML = await renderMembers();
});