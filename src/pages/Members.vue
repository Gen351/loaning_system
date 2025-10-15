<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Members</h1>

    <div class="flex justify-between items-center mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search member..."
        class="border rounded px-3 py-2 w-1/3"
      />
      <button
        @click="openAddModal"
        class="bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Add Member
      </button>
    </div>

    <table class="w-full border-collapse border">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-2 py-1">Name</th>
          <th class="border px-2 py-1">Share Count</th>
          <th class="border px-2 py-1">Savings</th>
          <th class="border px-2 py-1">Loans</th>
          <th class="border px-2 py-1">Penalties</th>
          <th class="border px-2 py-1">Payments</th>
          <th class="border px-2 py-1">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="member in filteredMembers"
          :key="member.id"
          class="hover:bg-gray-50"
        >
          <td class="border px-2 py-1">
            {{ member.first_name }} {{ member.last_name }}
          </td>
          <td class="border px-2 py-1 text-center">
            {{ member.share_count }}
          </td>
          <td class="border px-2 py-1 text-right">
            ₱{{ format(member.totalSavings) }}
          </td>
          <td class="border px-2 py-1 text-right">
            ₱{{ format(member.totalLoans) }}
          </td>
          <td class="border px-2 py-1 text-right">
            ₱{{ format(member.totalPenalties) }}
          </td>
          <td class="border px-2 py-1 text-right">
            ₱{{ format(member.totalPayments) }}
          </td>
          <td
            class="border px-2 py-1 text-right font-semibold"
            :class="member.balance >= 0 ? 'text-green-600' : 'text-red-600'"
          >
            ₱{{ format(member.balance) }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Add Member Modal -->
    <div
      v-if="showAddModal"
      class="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
    >
      <div class="bg-white p-6 rounded w-96">
        <h2 class="text-lg font-bold mb-3">Add Member</h2>
        <input
          v-model="newMember.first_name"
          placeholder="First name"
          class="border w-full mb-2 px-3 py-2 rounded"
        />
        <input
          v-model="newMember.last_name"
          placeholder="Last name"
          class="border w-full mb-2 px-3 py-2 rounded"
        />
        <input
          v-model.number="newMember.share_count"
          type="number"
          placeholder="Share count"
          class="border w-full mb-4 px-3 py-2 rounded"
        />

        <div class="flex justify-end gap-2">
          <button
            @click="showAddModal = false"
            class="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            @click="addMember"
            class="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { supabase } from "@/supabase";

const members = ref([]);
const search = ref("");
const showAddModal = ref(false);
const newMember = ref({ first_name: "", last_name: "", share_count: 0 });

const fetchMembers = async () => {
  const { data: memberData, error: memberError } = await supabase
    .from("member")
    .select("*");
  if (memberError) return console.error(memberError);

  // Fetch related data
  const tables = ["savings", "loan", "penalty", "loan_payment", "penalty_payment"];
  const allData = {};

  for (const t of tables) {
    const { data, error } = await supabase.from(t).select("*");
    if (!error) allData[t] = data;
  }

  members.value = memberData.map((m) => {
    const totalSavings = sum(allData.savings, m.id);
    const totalLoans = sum(allData.loan, m.id);
    const totalPenalties = sum(allData.penalty, m.id);
    const totalPayments =
      sum(allData.loan_payment, m.id) + sum(allData.penalty_payment, m.id);
    const balance = totalSavings - totalLoans - totalPenalties + totalPayments;

    return { ...m, totalSavings, totalLoans, totalPenalties, totalPayments, balance };
  });
};

const sum = (tableData, memberId) =>
  tableData
    ?.filter((r) => r.member_id === memberId)
    ?.reduce((acc, r) => acc + (r.amount || 0), 0) || 0;

const format = (val) => (val ? val.toLocaleString("en-PH", { minimumFractionDigits: 2 }) : "0.00");

const filteredMembers = computed(() =>
  members.value.filter((m) =>
    `${m.first_name} ${m.last_name}`.toLowerCase().includes(search.value.toLowerCase())
  )
);

const openAddModal = () => {
  newMember.value = { first_name: "", last_name: "", share_count: 0 };
  showAddModal.value = true;
};

const addMember = async () => {
  const { error } = await supabase.from("member").insert([
    {
      first_name: newMember.value.first_name.trim(),
      last_name: newMember.value.last_name.trim(),
      share_count: newMember.value.share_count || 0,
      created_at: new Date().toISOString(),
    },
  ]);
  if (error) return console.error(error);
  showAddModal.value = false;
  fetchMembers();
};

onMounted(fetchMembers);
</script>
