import { supabase } from "../services/supabaseClient";

export async function renderMembers() {
    const { data: members, error } = await supabase.from("member").select("*");

    if (error) {
        console.error("Error loading members:", error);
        return `<tr><td colspan="4">Failed to load members.</td></tr>`;
    }

    return members
        .map(member => `
            <tr id="${member.id}">
                <td>${member.first_name}</td>
                <td>${member.last_name}</td>
                <td>${member.share_count}</td>
                <td>${member.created_at}</td>
            </tr>
        `)
        .join("");
}



