import { getMembers } from "../supabase/fetch.js";
import { addMember } from "../supabase/send.js";

const tbody = document.getElementById("members-tbody");
const status = document.getElementById("status");
const toggleBtn = document.getElementById("toggle-add");
const form = document.getElementById("add-form");
const cancelBtn = document.getElementById("cancel-add");

toggleBtn.addEventListener("click", () => {
    form.style.display = form.style.display === "none" ? "block" : "none";
});

cancelBtn.addEventListener("click", () => {
    form.reset();
    form.style.display = "none";
    status.textContent = "";
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const first_name = document.getElementById("first-name").value.trim();
    const last_name = document.getElementById("last-name").value.trim();
    const share_count = parseInt(document.getElementById("share-count").value, 10);

    if (!first_name || !last_name || Number.isNaN(share_count)) {
        status.textContent = "Please fill all fields correctly.";
        return;
    }

    status.textContent = "Saving...";
    try {
        const newMember = await addMember({ first_name, last_name, share_count });
        // Optimistically prepend new row
        prependRow(newMember);
        form.reset();
        form.style.display = "none";
        status.textContent = "Member added.";
    } catch (err) {
        console.error(err);
        status.textContent = "Failed to add member.";
    }
});

function renderRows(members) {
    tbody.innerHTML = members
        .map(m => `
        <tr data-id="${m.id}" style="cursor:pointer">
            <td>${m.first_name} ${m.last_name}</td>
            <td>${m.share_count}</td>
            <td>${m.created_at ?? ""}</td>
        </tr>
        `)
        .join("");
}

// Add newest on top without refetch
function prependRow(m) {
    const tr = document.createElement("tr");
    tr.dataset.id = m.id;
    tr.style.cursor = "pointer";
    tr.innerHTML = `
        <td>${m.first_name} ${m.last_name}</td>
        <td>${m.share_count}</td>
        <td>${m.created_at ?? ""}</td>
    `;
    tbody.prepend(tr);
}

// Click → go to that member’s loans page
tbody.addEventListener("click", (e) => {
    const tr = e.target.closest("tr");
    if (!tr) return;
    const memberId = tr.dataset.id;
    if (memberId) {
        // assumes loans.html is beside members.html
        window.location.href = `./loans.html?memberId=${encodeURIComponent(memberId)}`;
    }
});

(async function init() {
    status.textContent = "Loading...";
    try {
        const members = await getMembers();
        renderRows(members);
        status.textContent = "";
    } catch (err) {
        console.error(err);
        status.textContent = "Failed to load members.";
    }
})();
