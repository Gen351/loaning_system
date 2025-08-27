import { renderMembers } from "../../models/member.js";

// Set the default tab to be open on page load
document.addEventListener("DOMContentLoaded", async () => {
    openTab("Member");
    const members_container = document.getElementById("members-container");
    members_container.innerHTML = await renderMembers();
});