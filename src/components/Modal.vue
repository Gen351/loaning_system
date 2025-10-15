<template>
  <div
    class="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
    @click.self="closeModal"
  >
    <div
      class="bg-[#2a2a2a] text-white rounded-xl shadow-2xl p-6 w-full max-w-lg border border-[#3a3a3a]"
    >
      <div class="flex justify-between items-center border-b border-[#3a3a3a] pb-3 mb-4">
        <h2 class="text-xl font-semibold">{{ title }}</h2>
        <button
          @click="closeModal"
          class="text-gray-300 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      <slot></slot>

      <div class="mt-5 flex justify-end gap-2">
        <button
          class="bg-[#3a3a3a] text-white px-4 py-2 rounded-lg hover:bg-[#4a4a4a] transition-all"
          @click="closeModal"
        >
          Close
        </button>
        <button
          class="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ title: String });
const emit = defineEmits(["close"]);
function closeModal() {
  emit("close");
}
</script>
