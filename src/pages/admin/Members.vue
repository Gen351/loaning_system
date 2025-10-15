<!-- /pages/admin/Members.vue -->
<template>
  <div>
    <table class="w-full text-center border-collapse">
      <thead>
        <tr>
          <th>first_name</th>
          <th>last_name</th>
          <th>share_count</th>
          <th>created_at</th>
        </tr>
      </thead>
      <tbody v-html="membersHtml"></tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { renderMembers } from "@/models/members";

const membersHtml = ref("");

onMounted(async () => {
  membersHtml.value = await renderMembers();
});
</script>
