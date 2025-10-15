<template>
  <div class="bg-[#1f1f1f] text-white min-h-screen flex flex-col items-center p-6">
    <h1 class="text-4xl font-bold mb-8">Admin Dashboard</h1>

    <div class="flex flex-wrap justify-center gap-4 mb-10">
      <button
        v-for="item in menuItems"
        :key="item.name"
        @click="openModal(item.name)"
        class="px-6 py-3 rounded-lg bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white font-medium transition-all duration-200"
      >
        {{ item.label }}
      </button>
    </div>

    <!-- Modals -->
    <Modal
      v-if="activeModal === 'Members'"
      title="Members"
      @close="closeModal"
    >
      <Members />
    </Modal>

    <Modal
      v-if="activeModal === 'Savings'"
      title="Savings"
      @close="closeModal"
    >
      <Savings />
    </Modal>

    <Modal
      v-if="activeModal === 'Loans'"
      title="Loans"
      @close="closeModal"
    >
      <Loans />
    </Modal>

    <Modal
      v-if="activeModal === 'Penalties'"
      title="Penalties"
      @close="closeModal"
    >
      <Penalties />
    </Modal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import Members from "@/pages/admin/Members.vue";
import Savings from "@/pages/admin/Savings.vue";
import Loans from "@/pages/admin/Loans.vue";
import Penalties from "@/pages/admin/Penalties.vue";

const activeModal = ref(null);
const menuItems = [
  { name: "Members", label: "Members" },
  { name: "Savings", label: "Savings" },
  { name: "Loans", label: "Loans" },
  { name: "Penalties", label: "Penalties" },
];

const openModal = (name) => (activeModal.value = name);
const closeModal = () => (activeModal.value = null);
</script>
