// admin.js
import { supabase } from "./services/supabaseClient.js";
import { ADMIN_EMAIL } from "./services/admin_email.js";
import { renderMembers } from "./models/member.js";

(async () => {
    const { data } = await supabase.auth.getSession();
    if (data?.session) {
        const user = data.session.user;
        if (user.email !== ADMIN_EMAIL) {
            window.location.href = "../index.html";
            // sign out
            await supabase.auth.signOut();
        }
    } else {
        // if the session is null
        window.location.href = "../index.html";
    }
})();


document.addEventListener("DOMContentLoaded", async () => {
    const app = document.getElementById("members-container");
    app.innerHTML = await renderMembers();
});