import { renderMembers } from "./models/member.js";
import { addMember } from "./supabase/send.js";

document.addEventListener("DOMContentLoaded", async () => {
    const app = document.getElementById("app");
    app.innerHTML = await renderMembers();

    // addMember('Hazel', 'Lozada', 500);
});