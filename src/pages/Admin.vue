<template>
  <div class="flex flex-col items-center min-h-screen p-6">
    <div class="p-6">
      <div id="Member" class="tab-content">
        <h2 class="text-xl font-semibold text-gray-700 mb-4 text-center">
          Sheet: Member
        </h2>

        <div class="table-container w-full max-w-[800px] mx-auto rounded-lg border border-gray-200">
          <table class="w-full text-center">
            <thead>
              <tr>
                <th>first_name</th>
                <th>last_name</th>
                <th>share_count</th>
                <th>created_at</th>
              </tr>
            </thead>
            <tbody id="members-container" v-html="membersHtml"></tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="mt-6 flex gap-2 justify-center">
      <button @click="openPage('Members')">Members</button>
      <button @click="openPage('Savings')">Savings</button>
      <button @click="openPage('Loans')">Loans</button>
      <button @click="openPage('Penalties')">Penalties</button>
      <button @click="openPage('AddMember')">Add A Member</button>
      <button @click="openPage('DbPreview')">Preview DB</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/services/supabaseClient";
import { renderMembers } from "../models/members";
const membersHtml = ref("");
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

const openPage = (page) => {
  window.open(`./${page}.vue`, "_blank");
};

onMounted(async () => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    window.location.href = "/";
  } else if (session.user.email !== adminEmail) {
    await supabase.auth.signOut();
    window.location.href = "/";
  } else {
    membersHtml.value = await renderMembers();
  }

  supabase.auth.onAuthStateChange((_event, session) => {
    if (!session) window.location.href = "/";
  });
});
</script>
